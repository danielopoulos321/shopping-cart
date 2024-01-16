import { useOutletContext } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Shop() {
  const [cartItems, setCartItems] = useOutletContext();
  const addItem = () => {
    console.log(cartItems);
    let newItemArr = [...cartItems];
    newItemArr.push(0);
    setCartItems(newItemArr);
  };
  return (
    <div>
      <h2>Shop</h2>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
