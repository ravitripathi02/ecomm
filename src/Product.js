import React, { useContext } from "react";
import { CartContext } from "./App";
import { Link } from "react-router-dom";
import logo from "./logo-black.png";
function Product() {
  const {
    data,
    remove,
    addProduct,
    add,
    hidePop,
    setImage,
    setHeading,
    setDescription,
    setPrice,
    pList,
    sortProduct
  } = useContext(CartContext);
  if (!data) {
    return <div>Loading...</div>; // or handle the loading state in your preferred way
  }
  return (
    <div>
      {!add && (
        <>
          <nav className="nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="right">
              <button onClick={() => sortProduct()}>Sort Product</button>
              <button
                className={add === 1 ? "popup" : ""}
                onClick={() => addProduct()}
              >
                Add Product
              </button>
            </div>
          </nav>
          <div className="product-list">
            {data?.map((item) => (
              <div className="card" key={item.id}>
                <Link
                  to={`/info/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="link">
                    <div>
                      <img
                        src={item.image}
                        alt="img"
                        style={{ width: "200px", height: "180px" }}
                      />
                    </div>
                    <div className="heading">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </Link>
                <div className="price-rem">
                  <div className="price">$ {item.price}</div>
                  <button onClick={() => remove(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {add === 1 && (
        <form onSubmit={() => pList()}>
          <div className="form">
            <button onClick={() => hidePop()}>X</button>
            <div className="container">
              <input
                style={{ width: "200px" }}
                type="text"
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
              />
            </div>
            <div className="container">
              <input
                style={{ width: "200px" }}
                type="text"
                placeholder="Heading"
                id="heading"
                onChange={(e) => setHeading(e.target.value)}
                required
              />
            </div>
            <div className="container">
              <input
                style={{ width: "200px" }}
                type="text"
                id="heading"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="container">
              <input
                style={{ width: "200px" }}
                type="number"
                id="price"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="newPro">
              <button type="submit">Add Product</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Product;
