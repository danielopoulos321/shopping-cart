import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import styles from "./App.module.css";
import Shop from "./components/Shop/Shop.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home cartItems={cartItems} />,
    },
    {
      path: "shop",
      element: <Shop cartItems={cartItems} setCartItems={setCartItems} />,
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
