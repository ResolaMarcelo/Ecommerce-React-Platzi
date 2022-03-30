import React, { useEffect } from 'react'
import  {useParams, Link} from "react-router-dom"
import initialState from "./../initialState"

const   {categoriaId} = useParams()

const [arrayDeProductos, setArrayDeProductos] = useState([])

useEffect(() =>     {
    setArrayDeProductos(initialState.filter(products => products.category == "categoriaId"))
}, [categoriaId])

export default function Categoria() {
  return (
    <div> 

    estoy en la categoria {categoriaId}

        {
            arrayDeProductos.map(product => 
            <div>
                {products.category}
                    {products.id}
            </div>
                )
        }
    </div>
  )
}
