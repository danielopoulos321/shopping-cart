import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={styles.container}>
      <Navbar cartItems={cartItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </div>
  );
}

export default App;
