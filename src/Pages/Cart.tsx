import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/slice/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state: any) => state.cart);
  // console.log(myCart);
  const handleRemove = (productId: "string") => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {myCart.map((product: any) => (
          <div key={product.payload.id} className="cartCard">
            <img src={product.payload.image} alt="" />
            <h5>{product.payload.title}</h5>
            <h5>{product.payload.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
