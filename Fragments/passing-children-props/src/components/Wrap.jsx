import React from "react";

function Wrap(props) {
  return (
    <div
      style={{
        color: "tomato",
        border: "7px double aliceblue",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
        width: "500px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Wrap;
