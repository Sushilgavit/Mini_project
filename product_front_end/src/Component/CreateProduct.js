import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductUpdate.css";
export default function CreateProduct() {
  const [product, setProduct] = useState({});
  let navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(product);

    fetch("https://localhost:7107/api/Product", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r.json());
    });

    event.preventDefault();

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Category:</label>
      <input type="text" name="category" onChange={handleChange} />
      <br />
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label>Price:</label>
      <input type="text" name="price" onChange={handleChange} />
      <br />
      <label>MinQty:</label>
      <input type="text" name="minQty" onChange={handleChange} />
      <br />
      <input type="submit" />
    </form>
  );
}
