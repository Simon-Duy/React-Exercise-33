import React from "react";
import ShoeItem from "./ShoeItem";

const ListShoe = ({ arrShoe, addShoeCart }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {arrShoe.map((shoe, index) => {
        return (
          <ShoeItem shoe={shoe} key={index} addShoeCart={addShoeCart} />
        );
      })}
    </div>
  );
};

export default ListShoe;
