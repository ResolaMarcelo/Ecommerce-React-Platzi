import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/components/Products.css"

const Product = ({ product, handleAddToCart }) => {



    return (

        <div class="card" >
            
         <img className="card-img-top" src={`${product.image}`} alt="" />
                <div class="card-body text-center">
                    <h5 class="card-title text-center">     {product.title} </h5>
                    
                    <p class="card-text text-center">   {product.description} </p>
<br />
                    <p className='card-text'>    $ {product.price} </p>
                    <br />
                    <a onClick={handleAddToCart(product)} className='btn btn-dark s'>Añadir</a>
                </div>
        </div>





        /* <div className="Products-item">
           
            <div className="Product-item-info">
                <h2>{product.title}
                    <span>{product.price}     </span>
                </h2>
                <p> {product.description} </p>
            </div>
        </div>  */

    )
}

export default Product