import React, { useContext } from "react";
import { cartContext } from "../App";

function SingleProduct({ items}) {

    const {cart, setCart,setCount,count}=useContext(cartContext);
  
  const handleAdd = (id) => {
    setCart([...cart, items]);
    setCount(count+1);
    console.log(cart.length)
    };
  const handleRemove = (id) => {
    setCart(cart.filter((f) => f.id !== id));
        setCount(count-1);
    };

  return (
    <div className="single">
      <section key={items.id}>
        <div id="img">
        <img src={items.image} />
        </div>
        {items.title.length<20 ? <h4>{items.title}</h4> : <h4>{items.title.slice(0,20)}...</h4>}
        <h6>Price : {items.price}</h6>
        <h6>Rating : {items.rating.rate}</h6>
        {cart.includes(items) ? (
          <button
            style={{ backgroundColor: "orangered", color: "white" }}
            onClick={() => handleRemove(items.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => handleAdd(items.id)}
          >
            Add to Cart
          </button>
        )}
      </section>
    </div>
  );
}

export default SingleProduct;
