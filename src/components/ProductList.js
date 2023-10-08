import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container pt-5 text-center">
      <h2>Our Product</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-3" key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
