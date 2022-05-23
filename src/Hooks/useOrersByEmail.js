import { useQuery } from "react-query"

const useOrdersByEmail = email => {
    const { data: userOrders, isLoading, refetch } = useQuery(['userOrder', email], () => fetch(`http://localhost:5000/order/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    return [userOrders, isLoading, refetch]

}
export default useOrdersByEmail;