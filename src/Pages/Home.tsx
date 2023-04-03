import Products from "../components/products/Products";

const Home = () => {
  return (
    <div>
      <h3 className="heading">Welcome to the redux toolkit store</h3>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
