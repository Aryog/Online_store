"use client"
import React from 'react'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import { ProductItems } from '@/components/@types/Products/Products'
import axios from 'axios'
const Products = () => {
    // get api calls here
    const [products, setProducts] = useState<ProductItems[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])
    return (
        <div className='w-5/6 m-auto mt-8 h-full'>
            {
                products.length > 0
                    ? <div className='m-2 flex flex-wrap gap-4 justify-evenly'>{products.map((product) => <ProductCard productData={product} key={product.id} />)}</div>
                    : <div>Loading...</div>
            }

        </div>
    )
}

export default Products