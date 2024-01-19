import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import styles from "./App.module.css";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const router = createBrowserRouter([
    {
      index: true,
      element: <Home cartItems={cartItems} />,
    },
    {
      path: "shop",
      element: (
        <Shop
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ),
    },
    {
      path: "cart",
      element: <Cart cartItems={cartItems} setCartItems={setCartItems} />,
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
