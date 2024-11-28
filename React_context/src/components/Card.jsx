import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useUserContext } from "../components/ContextProvider";

const Card = () => {
    const {
        products,
        setProducts,
        cardAmount,
        setCardAmount,
        cardQuantity,
        setCardQuantity,
    } = useUserContext();
    const [overallTotal, setOverallTotal] = useState(0);

    useEffect(() => {
        const total = products.reduce((sum, product) => {
            const priceAfterDiscount =
                product.price - product.price * (product.discountPercentage / 100);
            return sum + priceAfterDiscount * (product.quantity || 0);  // Account for 0 quantity
        }, 0);
        setOverallTotal(total.toFixed(2));
    }, [products]);

    const handleQuantityChange = (quantity, productIndex, priceAfterDiscount) => {
        const updatedProducts = [...products];
        const oldQuantity = updatedProducts[productIndex].quantity || 0;  // Default to 0 if no quantity
        updatedProducts[productIndex].quantity = quantity;

        setCardQuantity(cardQuantity + (quantity - oldQuantity));
        setCardAmount(
            cardAmount +
            (quantity - oldQuantity) * parseFloat(priceAfterDiscount)
        );
        setProducts(updatedProducts);
    };

    const handleRemoveProduct = (productIndex) => {
        const updatedProducts = [...products];
        updatedProducts[productIndex].quantity = 0; // Set quantity to 0

        setCardQuantity(cardQuantity - (products[productIndex].quantity || 0));  // Adjust based on previous quantity
        setCardAmount(
            cardAmount - (products[productIndex].price * (products[productIndex].quantity || 0))
        );
        setProducts(updatedProducts);
    };

    return (
        <div>
            {products.map((product, i) => {
                const priceAfterDiscount = (
                    product.price -
                    product.price * (product.discountPercentage / 100)
                ).toFixed(2);

                const subTotal = (
                    priceAfterDiscount * (product.quantity || 0)  // Ensure it's 0 if quantity is 0
                ).toFixed(2);

                return (
                    <div
                        className="card mb-3 position-relative"
                        key={i}
                        style={{ width: "80%", margin: "auto" }}
                    >
                        {/* Quantity dropdown at the top-right corner */}
                        <div
                            className="position-absolute"
                            style={{
                                top: "10px",
                                right: "10px",
                            }}
                        >
                            <select
                                className="form-select form-select-sm"
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
                        </div>

                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-img"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title font-weight-bold text-success">{product.title}</h5>

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
                                    <div className="d-flex gap-2 justify-content-end">
                                            <button
                                                className="btn btn-success btn-sm"
                                            >
                                                Pay
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveProduct(i)}
                                            >
                                                Remove
                                            </button>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="container mt-4 d-flex justify-content-center">
                <h3>Overall Total: ${overallTotal}</h3>
            </div>
        </div>
    );
};

export default Card;
