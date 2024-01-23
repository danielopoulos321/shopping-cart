/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import styles from "./Shop.module.css";
export default function Shop({ products, cartItems, setCartItems }) {
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
    <>
      <Navbar cartItems={cartItems} />
      <main className={styles.productContainer}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addItem={() => addItem(product)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
