import axios from "axios";
export const fetchProducts = async (selectedOption: string) => {
    try {
        if (selectedOption === '') {
            const response = await axios.get('https://fakestoreapi.com/products')
            return response.data;
        } else {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${selectedOption}`)
            console.log(response.data);
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchCategories = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        return response.data;
    } catch (error) {
        console.log(error)
    }
}