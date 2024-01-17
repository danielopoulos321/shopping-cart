/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";

export default function Home({ cartItems }) {
  return (
    <>
      <Navbar cartItems={cartItems} />
      <h1>Home</h1>
    </>
  );
}
