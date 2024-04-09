import React from "react";

const ShoeItem = ({ shoe, index, addShoeCart }) => {
  return (
    <div className="border-2 p-5 rounded-md space-y-2" key={index}>
      <img src={shoe.image} alt="Đây là hình ảnh Giày" />
      <h2 className="text-2xl font-semibold">{shoe.name}</h2>
      <p className="text-lg text-gray-500">Giá tiền: ${shoe.price}</p>
      <button onClick={() => {
        addShoeCart(shoe);
      }} className="py-2 px-5 text-white bg-black rounded-md">
        Thêm vào Giỏ
      </button>
    </div>
  );
};

export default ShoeItem;
