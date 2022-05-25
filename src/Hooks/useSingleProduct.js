import { signOut } from "firebase/auth";
import { useQuery } from "react-query"
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

const useSingleProduct = id => {
    const { data: product, isLoading, refetch } = useQuery(['product', id], () => fetch(`http://localhost:5000/product/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                Navigate('/');
            }
            return res.json()
        }))
    return [product, isLoading, refetch]
}
export default useSingleProduct;
