import Loading from '../Loading/Loading'
import { useCartContext} from '../../context/CartContext'
import Clear from '../clear/Clear'
import Form from '../Form/Form'
import './Cart.css'



const Cart = () => {
  const {cartList,clearCarrito, overallPrice, removeItem} = useCartContext()

  return (
    <div className='cart-prod'> 
      {cartList?
          (cartList.map(product => <div key={product.id}>
            <div className="cart-item">
              <button className='button btn btn-outline-secondary' onClick={()=> removeItem(product.id)}>X</button>
              <img alt='img' src={product.foto}/>  
            </div>
            <h1 className='cart-name'>{product.name}</h1>
            <span className='cart-price' >descripsion: Estas peliculas estan echas para entretenimiento familiar  </span><br/>
            <span className='cart-price' >precio: {product.price}</span><br/>
            <span className='cart-cantidad'>cantidad: {product.cantidad}</span> 
            <h4 className='cart-total'>El precio total: {overallPrice()}</h4> </div>  ))
            : <Loading/>
      }
    {cartList.length? 
    (
    <div className='clear'><button className='btn btn-outline-secondary' onClick={clearCarrito}>Vaciar carrito</button></div>
    )
    : <Clear/> 
    }
     { cartList.length !== 0 &&
      <Form/>
    }
  </div>
  )
}

export default Cart
