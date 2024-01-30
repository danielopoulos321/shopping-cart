/* eslint-disable react/prop-types */
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./Home.module.css";
import Hero from "/Users/danielanestopoulos/repos/shopping-cart/src/assets/hero.jpg";
export default function Home({ cartItems }) {
  return (
    <div className={styles.container}>
      <Navbar cartItems={cartItems} />
      <div className={styles.splashContainer}>
        <div className={styles.splash}>
          <div className={styles.text}>
            <h2>One Stop Shop For All</h2>
            <p>
              Elevate your style with Sparkling Jewels, High-Tech Gadgets &
              Fashion
            </p>

            <div className={styles.wrapper}>
              <div className={styles.link_wrapper}>
                <Link to="/shop">Shop Now</Link>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <img src={Hero} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
