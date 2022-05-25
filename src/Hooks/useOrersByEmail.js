import { signOut } from "firebase/auth";
import { useQuery } from "react-query"
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

const useOrdersByEmail = email => {
    const { data: userOrders, isLoading, refetch } = useQuery(['userOrder', email], () => fetch(`http://localhost:5000/order/${email}`, {
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
    return [userOrders, isLoading, refetch]

}
export default useOrdersByEmail;