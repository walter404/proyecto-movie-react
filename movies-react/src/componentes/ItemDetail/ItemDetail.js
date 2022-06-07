import {  useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({producto}) => {

  const [inputType, setInputType] = useState('itemCount');
  const {addToCart} = useCartContext()

  const onAdd = (cant) => {
    console.log(cant)
    addToCart({...producto, cantidad: cant})
    setInputType('buyButtons');
  }

  //console.log(cartList)
   

    return (
      <div className="row" style={{marginLeft:0, marginRight:0}} >

        <div className="col">
          <img className="imagen" alt="ima" src={producto.foto} />
        </div>

        <div className="col">
          <h1>{producto.name}</h1>
          <h2>Categoria: {producto.categoria}</h2>
          <h3>$ {producto.price}</h3>
                
          {inputType === 'itemCount' ?
          <ItemCount producto={producto} initial={1} stock={5} onAdd={onAdd} />
          :
          <Intercambiabilidad/>}
          
        </div>

      </div>
    )
  }
  
  export default ItemDetail
  