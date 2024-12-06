'use client'
import styles from "./page.module.css";
import Product, { ProductType } from "./Components/product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(result => {
        setProducts(result.data)
      })
  }, [])

  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.productsWrapper}>

          {
            products.map((card: ProductType) => (
              <Product key={card.id} product={card} />
            ))
          }

        </div>
      </div>
    </>
  );
}
