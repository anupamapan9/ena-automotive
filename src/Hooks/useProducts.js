import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [fetching, setFetching] = useState(false)
    useEffect(() => {
        setFetching(true)
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFetching(false)
            })
    }, [])
    return [products, fetching]
}
export default useProducts;

