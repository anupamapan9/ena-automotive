import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const displayName = user?.displayName;
        const currentUser = {
            email: email,
            displayName: displayName
        };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
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
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
}

export default useToken;