/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import Product from "../Product/Product";
import styles from "./Shop.module.css";
export default function Shop({ products, cartItems, setCartItems }) {
  const addItem = (selectedProduct) => {
    let newItemArr = [...cartItems];
    newItemArr.push(selectedProduct);
    setCartItems(newItemArr);
  };
  return (
    <>
      <Navbar cartItems={cartItems} />
      <h2>Shop</h2>
      <main className={styles.productContainer}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addItem={() => addItem(product)}
          />
        ))}
      </main>
    </>
  );
}
