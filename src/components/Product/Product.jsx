/* eslint-disable react/prop-types */
import styles from "./Product.module.css";
export default function Product({ product, addItem }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.price);

  return (
    <div className={styles.itemCard}>
      <img src={product.image} alt={product.title} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>{price}</p>
        <button onClick={addItem}>ADD TO CART</button>
      </div>
    </div>
  );
}
