/* eslint-disable react/prop-types */
import styles from "./Product.module.css";
export default function Product({ product, addItem }) {
  return (
    <div className={styles.itemCard}>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  );
}
