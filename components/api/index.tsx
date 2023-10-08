import axios from "axios";
const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // setProducts(response.data);
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}