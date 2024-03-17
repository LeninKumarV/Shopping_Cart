import React, { useContext, useState } from "react";
import data from "../data.json";
import SingleProduct from "./SingleProduct";
import { cartContext } from "../App";

function Cart() {
    const { cart, setCart,setCount,count}=  useContext(cartContext);
  return (
    <div className="cart">
      {data.map((items) => (
        <SingleProduct
          items={items}
          cart={cart}
          setCart={setCart}
          setCount={setCount}
          count={count}
        />
      ))}
    </div>
  );
}

export default Cart;
