import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/Home">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/ContactUs">Contact US</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/ProductList">Product List</Link>{" "}
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
