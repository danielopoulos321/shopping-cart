import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
  const cartItems = [0, 0, 0, 0];
  return (
    <div className={styles.container}>
      <Navbar cartItems={cartItems} />
      <Outlet />
    </div>
  );
}

export default App;
