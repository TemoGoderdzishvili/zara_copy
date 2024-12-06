import styles from "./Product.module.css"

export interface ProductType {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
}

interface Props {
    product: ProductType
}

const Product = ({ product }: Props) => {
    return (
        <div className={styles.cardWrapper} key={product.id}>
            <div className={styles.imgDiv}>
                <img src={product.image} />
            </div>
            <div className={styles.label}>
                <div>
                    <p>{product.title.toUpperCase()}</p>
                    <p>$ {product.price}</p>
                </div>
            </div>
        </div>
    )
}
export default Product;