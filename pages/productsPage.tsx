import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { ProductModel, NewsResponse } from '@/models/ProductModel'
import ProductsGrid from '@/components/ProductsGrid'

interface BreakingNewsPageProps {
    newsArticles: ProductModel[],
  }
  
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  const response = await fetch("https://course-api.com/react-store-products")
  const rr = await response.json()
  return {

    props: {newsArticles: rr}
  }
}

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">All Products</title>
      </Head>
      <main >
        <h1>All Products</h1>
        <ProductsGrid articles={newsArticles} />
      </main>
    </>
  )
}