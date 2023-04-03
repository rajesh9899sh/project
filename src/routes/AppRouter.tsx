import { Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Platform from "../Pages/Platforms";
import Pricing from "../Pages/Pricing";
import Resources from "../Pages/Resources";
import Solution from "../Pages/Solution";
import Demo from "../components/demo/Demo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Demo />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/resource" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
