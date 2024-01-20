import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductUpdate.css";
export function ProductUpdate() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7107/api/Product/" + id)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((e) => console.log(e));
  }, {});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(product);
    console.log(JSON.parse(demo));
    fetch("https://localhost:7107/api/Product/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
    event.preventDefault();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Id</label>
      <input
        type="text"
        name="id"
        value={product.id || ""}
        onChange={handleChange}
      />
      <br /> <label>Category:</label>
      <input
        type="text"
        name="category"
        value={product.category || ""}
        onChange={handleChange}
      />
      <br /> <label>Name:</label>
      <input
        type="text"
        name="name"
        value={product.name || ""}
        onChange={handleChange}
      />
      <br /> <label>Price</label>
      <input
        type="text"
        name="price"
        value={product.price || ""}
        onChange={handleChange}
      />
      <br /> <label>MinQty:</label>
      <input
        type="text"
        name="minQty"
        value={product.minQty || ""}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
export default ProductUpdate;
