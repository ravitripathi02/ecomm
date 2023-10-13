import React, { useContext } from "react";
import { CartContext } from "./App";
import { useParams, useNavigate, Link } from "react-router-dom";
import logo from "./logo-black.png";
function Info() {
  const { data, add } = useContext(CartContext);
  const { productId } = useParams();

  // Check if data is null or undefined before trying to find the product

  const product = data.find((item) => item.id === parseInt(productId));

  // Check if a matching product was found
  if (!product) {
    return <div>Product not found</div>; // or handle the not found state
  }
  const history = useNavigate();

  const goBack = () => {
    history("/");
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <button onClick={goBack}>Back</button>
        </div>
      </nav>
      <div className="p1">
        <div className="p1-l">
          <img
            src={product.image}
            alt="img"
            style={{ width: "200px", height: "180px" }}
          />
        </div>
        <div className="p1-r">
          <div className="title">
            <h4>{product.title}</h4>
          </div>
          <div className="des">{product.description}</div>
          <div className="price">
            <h5>Price: ${product.price}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
