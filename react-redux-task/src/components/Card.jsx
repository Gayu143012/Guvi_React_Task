import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeProduct } from "../features/productsSlice";
import '../App.css';

const Card = () => {
  const dispatch = useDispatch();
  const { products, cardAmount } = useSelector((state) => state.products);

  const handleQuantityChange = (quantity, index, priceAfterDiscount) => {
    dispatch(updateQuantity({ index, quantity, priceAfterDiscount }));
  };

  const handleRemoveProduct = (index) => {
    dispatch(removeProduct(index));
  };

  return (
    <div className="cards-container">
      {products.map((product, i) => {
        const priceAfterDiscount = (
          product.price - product.price * (product.discountPercentage / 100)
        ).toFixed(2);

        const subTotal = (priceAfterDiscount * (product.quantity || 1)).toFixed(2);

        return (
          <div className="card" key={product.id}>
            {/* Image Section */}
            <div className="card-image">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-img"
              />
            </div>
            {/* Details Section */}
            <div className="card-details">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                <b>Description:</b> {product.description}
              </p>
              <p className="card-text">
                <b>Price:</b> ${product.price}
              </p>
              <p className="card-text">
                <b>Discount:</b> {product.discountPercentage}%
              </p>
              <p className="card-text final-price">
                <b>Final Price:</b> ${priceAfterDiscount}
              </p>
              <p className="card-text">
                <b>Sub-Total:</b> ${subTotal}
              </p>
              <div className="actions">
                <select
                  className="form-select"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      parseInt(e.target.value, 10),
                      i,
                      priceAfterDiscount
                    )
                  }
                >
                  {[...Array(product.stock + 1).keys()].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
                <button className="btn btn-success">Pay</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveProduct(i)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="overall-total">
        <h3>Overall Total: ${cardAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Card;
