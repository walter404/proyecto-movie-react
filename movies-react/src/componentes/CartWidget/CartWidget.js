import { FaCartArrowDown } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../CartWidget/Cart.css'

const CartWidget = () => {

  const {quantityTotal} = useCartContext()

  return ( 
  <>
    <Link to='/cart'>
        <div className="cart-widget">
          <div className='qty-display'>{quantityTotal() !== 0 && quantityTotal()}</div>
          <FaCartArrowDown className='cart' />
        </div>
    </Link>
  </>
  )
}

export default CartWidget
