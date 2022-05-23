import { useQuery } from "react-query"

const useSingleProduct = id => {
    const { data: product, isLoading, refetch } = useQuery(['product', id], () => fetch(`http://localhost:5000/product/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    return [product, isLoading, refetch]
}
export default useSingleProduct;
