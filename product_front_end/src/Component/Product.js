import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("https://localhost:7107/api/Product/" + id)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, {});
  return (
    <div>
      <label>Id:</label>
      {product.id}
      <br />
      <label>Category:</label>
      {product.category}
      <br />
      <label>Name:</label>
      {product.name}
      <br />
      <label>Price:</label>
      {product.price}
      <br />
      <label>MinQty:</label>
      {product.minQty}
    </div>
  );
}
export default Product;
