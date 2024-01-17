/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
export default function Shop({ cartItems, setCartItems }) {
  const addItem = () => {
    console.log(cartItems);
    let newItemArr = [...cartItems];
    newItemArr.push(0);
    setCartItems(newItemArr);
  };
  return (
    <>
      <Navbar cartItems={cartItems} />
      <h2>Shop</h2>
      <button onClick={addItem}>Add Item</button>
    </>
  );
}
