import React from 'react'
import "../styles/components/Success.css"

export default function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en x dias</span>
        <div className="Success-map">
          Google maps
        </div>
      </div>
    </div>
  )
}