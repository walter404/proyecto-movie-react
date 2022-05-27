import { Link } from 'react-router-dom'
import Loading from '../componentes/Loading/Loading'
import { useCartContext} from '../contex/CartContext'


const Cart = () => {

  const {cartList,vaciarCarrito, precioTotal, removeItem} = useCartContext()

 

  return (
    <div> 
      {cartList?
          (cartList.map(product => <div key={product.id}>
            <div className="cart-item">
              <img alt='img' src={product.foto}/>
              <button className='btn btn-outline-primary' onClick={()=> removeItem(product.id)}>X</button>
            </div>
            <h1>{product.name}</h1>
            <span >precio: {product.price}</span>
            <span>cantidad: {product.cantidad}</span> 
            <h4>El precio total: {precioTotal() !== 0 && precioTotal()}</h4> </div>  ))
            : <Loading/>
      }
    {cartList.length? 
    (
    <button onClick={vaciarCarrito}>Vaciar carrito</button>)
    :<Link to='/ItemDetailContainer'><button>volver al menu</button></Link> 
    }
  
  </div>
  )
}

export default Cart
