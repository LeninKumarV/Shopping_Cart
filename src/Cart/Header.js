import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../App'

function Header() {
    const {count}=useContext(cartContext);

  return (
    <div className='header'>
        <section>
            <>
            <h1>Shopping Cart</h1>
            </>
            <>
            <ul>
                <li>
                    <Link to={'/'}  id='link'>Home</Link>      
                </li>
                <li>
                    <Link to={'/Cart'}  id='link'>View Cart</Link> <span>{count}</span>      
                </li>
            </ul>
            </>
        </section>
    </div>
  )
}

export default Header