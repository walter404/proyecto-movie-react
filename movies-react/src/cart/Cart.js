// import { Link } from 'react-router-dom'
import Loading from '../componentes/Loading/Loading'
import { useCartContext} from '../contex/CartContext'
import Clear from '../componentes/clear/Clear'
import '../cart/Cart.css'


const Cart = () => {

  const {cartList,vaciarCarrito, precioTotal, removeItem} = useCartContext()

  return (
    <div className='cart-prod'> 
      {cartList?
          (cartList.map(product => <div key={product.id}>
            <div className="cart-item">
              <button className='button btn btn-outline-secondary' onClick={()=> removeItem(product.id)}>X</button>
              <img alt='img' src={product.foto}/>  
            </div>
            <h1 className='cart-name'>{product.name}</h1>
            <span className='cart-price' >precio: {product.price}</span><br/>
            <span className='cart-cantidad'>cantidad: {product.cantidad}</span> 
            <h4 className='cart-total'>El precio total: {precioTotal() !== 0 && precioTotal()}</h4> </div>  ))
            : <Loading/>
      }
    {cartList.length? 
    (
    <div className='clear'><button className='btn btn-outline-secondary' onClick={vaciarCarrito}>Vaciar carrito</button></div>
    )
    : <Clear/>
    }
  </div>
  )
}

export default Cart
