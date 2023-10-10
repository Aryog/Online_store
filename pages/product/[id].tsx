import React from 'react'
import { GetStaticProps } from 'next';
import axios from 'axios';
import { ProductItems } from '@/components/@types/Products/Products';
type productDetailsProps = {
    product: ProductItems;
}
const ProductDetails = ({ product }: productDetailsProps) => {
    return (
        <div>ProductDetails{product?.title}</div>
    )
}

export default ProductDetails;

/**
 * METHOD-1
 * Using Server Side Generation
 *  */
export const getStaticProps: GetStaticProps<productDetailsProps> = async ({ params }) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${params?.id}`);
    const product: ProductItems = response.data;

    return {
        props: { product },
    };
};
// For dynamic paths add getStaticPaths
export async function getStaticPaths() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const products: ProductItems[] = response.data;
        const paths = products.map((product) => ({
            params: { id: product.id.toString() },
        }));
        return {
            paths,
            fallback: true,
        }
    } catch (error) {
        console.log('Error fetching data:', error);
        return {
            paths: [],
            fallback: true,
        }
    }
}

/**
 * METHOD-2
 * Using server side rendering (Also working)
 *  */
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const { query } = context;
//     try {
//         const response = await axios.get(`https://fakestoreapi.com/products/${query.id}`);
//         const product: ProductItems = response.data;

//         return {
//             props: { product },
//         };
//     } catch (error) {
//         return {
//             notFound: true,
//         };
//     }
// };