import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/slice/cart";
import "./style.css";
import { RootState } from "../../redux/store";
import { fetchProduct } from "../../redux/thunk";

const Products = () => {
  const { data: products } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAdd = (product: any) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product: any) => (
        <div className="card" key={product.id}>
          <img className="img" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(add(product))} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
