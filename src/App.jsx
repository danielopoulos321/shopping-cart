import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  const cartItems = [0, 0, 0];
  return (
    <>
      <Navbar cartItems={cartItems} />
      <Outlet />
    </>
  );
}

export default App;
