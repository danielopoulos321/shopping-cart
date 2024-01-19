/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
export default function Cart({ cartItems }) {
  return (
    <>
      <Navbar cartItems={cartItems} />
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </>
  );
}
