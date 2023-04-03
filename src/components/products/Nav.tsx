import "./index.css";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <div className="navLink">Home</div>
        <div className="navLink">Cart</div>
        <span className="cartCount">Cart item: 0</span>
      </div>
    </div>
  );
};

export default Nav;
