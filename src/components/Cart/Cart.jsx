/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import Footer from "../Footer/Footer";
import CartProduct from "../CartProduct/CartProduct";
export default function Cart({ cartItems, setCartItems }) {
  const priceTotal = (cartItems) => {
    if (cartItems.length == 0)
      return { subtotal: "$0.00", tax: "$0.00", totalAfterTax: "$0.00" };
    let subtotal = cartItems.reduce((acc, curVal) => {
      const price = parseFloat(curVal.price);
      return acc + (isNaN(price) ? 0 : price * curVal.quantity);
    }, 0);

    const tax = subtotal * 0.15;
    const totalAfterTax = subtotal + tax;
    return {
      subtotal: `$${subtotal.toFixed(2)}`,
      tax: `$${tax.toFixed(2)}`,
      totalAfterTax: `$${totalAfterTax.toFixed(2)}`,
    };
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
          <div>
            <div className={styles.totals}>
              <h1>Your Total</h1>
              <hr />
              <div className={styles.price}>
                <p>Subtotal:</p>
                <p>{priceTotal(cartItems).subtotal}</p>
              </div>
              <div className={styles.price}>
                <p>Tax:</p>
                <p>{priceTotal(cartItems).tax}</p>
              </div>
              <div className={styles.price}>
                <p>Total:</p>
                <p>{priceTotal(cartItems).totalAfterTax}</p>
              </div>
            </div>
            <div className={styles.checkout}>Checkout</div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
