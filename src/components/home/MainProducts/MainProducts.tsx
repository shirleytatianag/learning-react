"use client"
import styles from './MainProducts.module.scss'
import {useState} from "react";
import Image from 'next/image';

const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_AUTH_TOKEN || '',
    },
  })
  const data = await response.json()
  return data.products
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: string[];
  options: string[];
  images: ImageProperties[];
}

interface ImageProperties{
  id: number;
  alt: null | string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}


export const MainProducts = () => {
  const [products, setProducts]= useState<Product[]>([])

  getProducts().then(products => {
     setProducts(products);
  })

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
}