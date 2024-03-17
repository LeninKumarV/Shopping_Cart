import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Cart/Header';
import Cart from './Cart/Cart';
import Products from './Cart/Products';
import { useState } from 'react';
import { createContext } from 'react';

export const cartContext=createContext();

function App() {
  const [count,setCount]=useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <cartContext.Provider value={{cart,setCart,setCount ,count}}>
      <Header count={count}/>
        <Routes>
          <Route path='/' element={<Cart />} />
          <Route path='/Cart' element={<Products />} />
        </Routes>
   
      </cartContext.Provider>
    </div>
  );
}

export default App;
