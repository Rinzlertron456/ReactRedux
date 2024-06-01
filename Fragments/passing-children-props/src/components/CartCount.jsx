import React from "react";

function CartCount(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button onClick={props.AddToCart}>
          Add to Cart 🛒
          {props.count > 0 && (
            <span className="badge bg-secondary">{props.count}</span>
          )}
        </button>
        <button onClick={props.RemoveFromCart}>
          Remove from Cart 🛒
          {props.count >= 1 && (
            <span className="badge bg-secondary">{props.count}</span>
          )}
        </button>
      </div>
    </>
  );
}

export default CartCount;
