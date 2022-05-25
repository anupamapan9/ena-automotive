import { useQuery } from "react-query";


const useUserprofile = (email) => {
    const { data: updatedUser, isLoading, refetch } = useQuery(['updatedUser', email], () => fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    return [updatedUser, isLoading, refetch]
};

export default useUserprofile;