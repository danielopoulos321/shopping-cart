/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Home.module.css";
export default function Home({ cartItems }) {
  return (
    <div className={styles.container}>
      <Navbar cartItems={cartItems} />
      <Footer />
    </div>
  );
}
