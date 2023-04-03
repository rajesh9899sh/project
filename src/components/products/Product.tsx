import { useState, useEffect } from "react";
import Pagination from "../../pagination/Pagination";

const Products = () => {
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    setProducts(await res.json());
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="productsWrapper">
      {products.slice((page - 1) * 5, page * 5).map((product: any) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to cart</button>
        </div>
      ))}
      <Pagination
        page={page}
        totalPages={Math.ceil(products?.length / 5)}
        active={({ selected }: any) => {
          window.scroll(0, 0);
          setPage(selected + 1);
        }}
      />
    </div>
  );
};

export default Products;
