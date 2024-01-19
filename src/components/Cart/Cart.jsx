/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import styles from "./Cart.module.css";
export default function Cart({ cartItems }) {
  const priceTotal = (cartItems) => {
    if (cartItems.length == 0) return "$0.00";
    let total = cartItems.reduce((accumulator, currentValue) => {
      const price = parseFloat(currentValue.price);
      return accumulator + (isNaN(price) ? 0 : price);
    }, 0);
    return `$${total.toFixed(2)}`;
  };
  return (
    <>
      <Navbar cartItems={cartItems} />
      <h1>Cart</h1>
      <main>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
        <div className={styles.checkout}>
          <h2>Price: {priceTotal(cartItems)}</h2>
        </div>
      </main>
    </>
  );
}
