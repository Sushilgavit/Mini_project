import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductList.css";
function ProductList() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7107/api/Product")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);
  return (
    <div>
      <h4>
        <Link to="/CreateProduct">CreateProduct</Link>
      </h4>
      <h2>Products Details .....</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Name of the Product</th>
            <th>Price</th>
            <th>MinQty</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.minQty}</td>

              <td>
                <a href={"/product/" + product.id}>Product</a>
              </td>

              <td>
                <a href={"/ProductUpdate/" + product.id}> Edit</a>
              </td>

              <td>
                <a href={"/ProductDelete/" + product.id}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductList;
