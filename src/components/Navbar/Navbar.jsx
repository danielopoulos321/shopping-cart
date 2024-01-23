/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar({ cartItems }) {
  const cartLength = cartItems.reduce((acc, curVal) => {
    return acc + curVal.quantity;
  }, 0);
  return (
    <header className={styles.navContainer}>
      <h1>FakeStore</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <h2 className={styles.cart}>Cart ({cartLength})</h2>
        </Link>
      </div>
    </header>
  );
}
