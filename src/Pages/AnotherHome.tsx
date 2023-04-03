import Products from "../components/products/Product";
import Nav from "../components/products/Nav";

const AnotherHome = () => {
  return (
    <div>
      <Nav />
      <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default AnotherHome;
