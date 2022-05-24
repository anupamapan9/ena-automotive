import { useEffect, useState } from "react"
const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const displayName = user?.displayName;
        const currentUser = {
            email: email,
            displayName: displayName
        };
        console.log(currentUser)
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
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