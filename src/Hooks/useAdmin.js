import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";

const useAdmin = user => {
    const email = user.email;
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://young-gorge-13678.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user, email])
    return [admin, adminLoading]
}
export default useAdmin;