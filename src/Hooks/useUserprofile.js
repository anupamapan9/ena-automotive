import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";


const useUserprofile = (email) => {
    const { data: updatedUser, isLoading, refetch } = useQuery(['updatedUser', email], () => fetch(`http://localhost:5000/user/${email}`, {
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
    return [updatedUser, isLoading, refetch]
};

export default useUserprofile;