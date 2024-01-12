/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function Navbar({ cartItems }) {
  const cartLength = cartItems.length; // Change to account for multiples of an item with reduce
  return (
    <>
      <div className="navContainer">
        <h1>Company</h1>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <h2>{cartLength}</h2>
      </div>
    </>
  );
}
