import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export function ProductDelete() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7107/api/Product/" + id)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, {});
  const handeldel = (event) => {
    fetch("https://localhost:7107/api/Product/" + id, {
      method: "Delete",
    })
      .then((res) => res)
      .then((result) => {
        console.log(result);
      });
    navigate("/");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Are you sure</h1>
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
      <label>MInQty:</label>
      {product.minQty}
      <form onSubmit={handeldel}>
        <input type="submit" />
      </form>
    </div>
  );
}
export default ProductDelete;
