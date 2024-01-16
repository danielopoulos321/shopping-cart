/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar({ cartItems }) {
  const cartLength = cartItems.length; // Change to account for multiples of an item with reduce
  return (
    <>
      <div className={styles.navContainer}>
        <h1>Company</h1>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <h2>Items: {cartLength}</h2>
      </div>
    </>
  );
}
