/* eslint-disable react/prop-types */
import styles from "./CartProduct.module.css";
export default function CartProduct({ product, removeItem }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product.price);

  return (
    <div className={styles.itemCard}>
      <div className={styles.left}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </div>
      <div className={styles.right}>
        <p>{price}</p>
        <p></p>
        <button onClick={removeItem}>DELETE</button>
      </div>
    </div>
  );
}
