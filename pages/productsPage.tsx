import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { ProductModel, NewsResponse } from '@/models/ProductModel'
import ProductsGrid from '@/components/ProductsGrid'

interface ProductNewPageProps {
  products: ProductModel[],
  }
  
export const getServerSideProps: GetServerSideProps<ProductNewPageProps> = async () => {
  const response = await fetch("https://course-api.com/react-store-products")
  const rr = await response.json()
  return {

    props: {products: rr}
  }
}

export default function ProductNewPage({ products }: ProductNewPageProps) {
  return (
    <>
      <Head>
        <title key="title">All Products</title>
      </Head>
      <main className='p-4' style={{background: "#F1F5F8"}} >
        <h1>All Products</h1>
        <ProductsGrid articles={products} />
      </main>
    </>
  )
}