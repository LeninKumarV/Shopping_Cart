import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../App";

function Products() {

  const{cart, setCart, count, setCount }=useContext(cartContext);
  
  const [total,setTotal]=useState(0);

  const handleRemove = (id) => {
    setCart(cart.filter((f) => f.id !== id));
    setCount(count - 1);
  };

  let totalVal=0;
  useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0));
      // const res=(cart.map((m)=>parseFloat(m.price)))
     
      // for(let i=0;i<res.length;i++){
      //   totalVal=totalVal+res[i];
      // }
      // console.log("xkjj"+totalVal)
  },[cart])
  return (
    <div className="products">
      {cart.length > 0 ? (
        <section>
          {cart.map((cart) => (
            <section id="pro">
              <img src={cart.image} />
              <h4>{cart.title}</h4 >
              <h6>Price : {cart.price}</h6>
              <h6>Rating : {cart.rating.rate}</h6>
              <h6>Description : </h6><span>{cart.description}</span>
              <br></br>
              <button
                style={{ backgroundColor: "orangered", color: "white" }}
                onClick={() => handleRemove(cart.id)}
              >
                Remove from Cart
              </button>
            </section>
          ))}
          <h1 id="total">Total Price : {total}</h1>
        </section>
      ) : (
        <h1>Your Cart is Empty !</h1>
      )}
    </div>
  );
}

export default Products;
