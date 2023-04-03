import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Products/Navbar";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

const AppRouter = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
