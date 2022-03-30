import React,     {useContext} from 'react'
import "../styles/components/Checkout.css"
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function Checkout() {

  const   {state, removeFromCart} = useContext(AppContext)

  const   {cart} = state

  const handleRemove = product => () =>   {
    removeFromCart(product)
  }

  const handleSumTotal = () =>  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
          {cart.map((item) => 
           <div className="Checkout-item">
           <div className="Checkout-element">
             <h4> {item.title} </h4>
             <span> $ {item.price} USD  </span>
           </div>
           <button onClick={handleRemove(item)}>
             <i className='fas fa-trash-alt'></i>
           </button>
         </div>
            )}
       
      </div>
      { cart.length > 0 && (
         <div className="Checkout-sidebar">
         <h3> {`Precio total: $ ${handleSumTotal()} ARS`}  </h3>
         <Link to="/checkout/information">
           <button>Continuar pedido</button></Link>
       </div>
      )}  
     
    </div>
  )
}
