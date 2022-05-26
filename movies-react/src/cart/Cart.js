import { useCartContext} from '../contex/CartContext'


const Cart = () => {

  const { cartList,vaciarCarrito} = useCartContext()



  return (
    <div>
      
      {cartList.map(prod => <li>{prod.name} precio: {prod.price} cantidad: {prod.cantidad}</li> )} 

    {cartList.length?
    <button onClick={vaciarCarrito}>Vaciar carrito</button>
    : <p>no hay producto</p>
  }
      

    </div>
  )
}

export default Cart
