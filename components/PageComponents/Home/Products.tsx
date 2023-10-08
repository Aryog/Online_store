"use client"
import React from 'react'
import ProductCard from './ProductCard'
import { ProductItems } from '@/components/@types/Products/Products'
import AnimatePulse from '@/components/UI/AnimatePulse'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/components/api'
const Products = () => {
    const queryData = useQuery({ queryKey: ['products'], queryFn: fetchProducts })
    const isData = () => {
        if (queryData.isLoading) return Array.from({ length: 12 }, (_, index) => <AnimatePulse />)
        if (queryData.isError) return <pre>{JSON.stringify(queryData.error)}</pre>
        return queryData.data.map((product: ProductItems) => <ProductCard productData={product} key={product.id} />)
    }
    return (
        <div className='w-5/6 m-auto mt-8 h-full'>
            <div className='m-2 flex flex-wrap gap-4 justify-evenly'>
                {isData()}
            </div>
        </div>
    )
}

export default Products