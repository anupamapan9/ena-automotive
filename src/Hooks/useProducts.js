import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

const useProducts = () => {
    const { data: allProducts, isLoading, refetch } = useQuery('allProducts', () => fetch(`http://localhost:5000/product`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log('res', res);
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                Navigate('/');
            }
            return res.json()
        }))
    return [allProducts, isLoading, refetch]
}
export default useProducts;

