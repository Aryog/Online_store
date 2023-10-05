"use client"
import React from 'react'
import Rate from '../../UI/Rate'
import { ProductItems } from '@/components/@types/Products/Products'
type ProductCardProps = {
    productData: ProductItems;
}
const ProductCard = ({ productData }: ProductCardProps) => {
    return (
        <>
            <div className='drop-shadow-md hover:drop-shadow-lg gap-2 flex flex-col w-60 cursor-pointer bg-slate-50 mt-10'>
                {/* Image */}
                <div className='h-60 w-60 transition-transform transform hover:scale-110 hover:p-0'>
                    <img src={productData.image} className='h-full w-full object-contain' />
                </div>
                {/* bottom side */}
                <div className='p-2'>
                    {/* Product Name */}
                    <div className='line-clamp-2 relative'>
                        {productData.title}
                    </div>
                    {/* Product Price */}
                    <p className='text-red-500'>${productData.price}</p>
                    {/* Product Rating */}
                    <div className='flex flex-row pt-2'>
                        <Rate rate={productData.rating.rate} count={productData.rating.count} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard