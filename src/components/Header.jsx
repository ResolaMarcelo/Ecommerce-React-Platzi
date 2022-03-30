import React,   {useContext}  from 'react'
import "../styles/components/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext'

export default function Header() {

  const {state} = useContext(AppContext)

  const   {cart} = state;

  return (


    <div className='Header'>
    <h1 className='Header-title'>
      <Link to='/'>
        <div className='title'>  
        <img src="https://www.zarla.com/images/zarla-caballeros-1x1-2400x2400-20220103-7bghjgm4ypmx9xxvq7fp.png?crop=1:1,smart&width=250&dpr=2" alt="" />
        <h1 className='shop-title'>Shop</h1>
        </div>
      </Link>
    </h1>

    {/* <div className="Category">
      <ul> 
       <li> <Link to="/categoria/remeras">Remeras</Link> </li>
       <li> <Link to="/categoria/hoodies">Hoodies</Link> </li>
       <li> <Link to="/categoria/gorras">Gorras</Link> </li>

      </ul>
    </div> */}

    <div className='Header-checkout'>
      <Link to='/checkout'>
        <i className='fas fa-cart-shopping' />
      </Link>

        {cart.length > 0 && <div className='Header-alert'> {  cart.length} </div>}
     
    </div>


  </div>

    // <div className="Header">
    //   <h1 className='Header-title'>Store</h1>
    //   <div className="Header-checkout">
    //     <Checkout></Checkout>
    //   </div>
    // </div>
  )
}
