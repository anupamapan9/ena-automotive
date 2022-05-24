import { useQuery } from "react-query";

const useProducts = () => {
    const { data: allProducts, isLoading, refetch } = useQuery('allProducts', () => fetch(`http://localhost:5000/product`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    return [allProducts, isLoading, refetch]
}
export default useProducts;

