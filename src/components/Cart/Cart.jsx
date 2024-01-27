/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import Footer from "../Footer/Footer";
import CartProduct from "../CartProduct/CartProduct";
export default function Cart({ cartItems, setCartItems }) {
  const priceTotal = (cartItems) => {
    if (cartItems.length == 0) return "$0.00";
    let total = cartItems.reduce((acc, curVal) => {
      const price = parseFloat(curVal.price);
      return acc + (isNaN(price) ? 0 : price * curVal.quantity);
    }, 0);
    return `$${total.toFixed(2)}`;
  };

  const removeItem = (selectedProduct) => {
    let updatedCart = cartItems.map((item) => {
      if (item.id == selectedProduct.id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    });
    const newCart = updatedCart.filter((item) => item !== null);
    setCartItems(newCart);
  };

  const addItem = (selectedProduct) => {
    let newItemArr = [...cartItems];
    const existingItem = newItemArr.find(
      (item) => item.id === selectedProduct.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...selectedProduct, quantity: 1 };
      newItemArr.push(newItem);
    }
    setCartItems(newItemArr);
  };

  return (
    <div className={styles.container}>
      <div>
        <Navbar cartItems={cartItems} />
        <main>
          {cartItems.length == 0 ? (
            <h2>Your cart is empty!</h2>
          ) : (
            <div className={styles.items}>
              {cartItems.map((item) => (
                <CartProduct
                  key={item.id}
                  product={item}
                  removeItem={() => removeItem(item)}
                  addItem={() => addItem(item)}
                />
              ))}
            </div>
          )}
          <div className={styles.checkout}>
            <h1>Your Total</h1>
            <hr />
            <p>Subtotal: {priceTotal(cartItems)}</p>
            <p>Tax: </p>
            <p>Total: </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
