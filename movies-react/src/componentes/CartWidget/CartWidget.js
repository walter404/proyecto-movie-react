import { FaCartArrowDown } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../CartWidget/Cart.css'

const CartWidget = () => {

  const {cantidadTotal} = useCartContext()

  return ( 
  <>
    <Link to='/cart'>
        <div className="cart-widget">
          <div className='qty-display'>{cantidadTotal() !== 0 && cantidadTotal()}</div>
          <FaCartArrowDown className='cart' />
        </div>
    </Link>
  </>
  )
}

export default CartWidget
