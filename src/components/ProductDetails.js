import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const URL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch(`${URL}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  },[]);

  return (
    <div className="container">
    <h2>Product Details</h2>
      <img className="img-" src={product.image} alt={product.title} />

    </div>
  )
};

export default ProductDetails;
