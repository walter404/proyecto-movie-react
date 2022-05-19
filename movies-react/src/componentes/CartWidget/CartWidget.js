import { FaCartArrowDown } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import '../CartWidget/Cart.css'
const CartWidget = () => {
  return (
    <>
      <Link to='/cart'>
          <FaCartArrowDown className='carrito' />
      </Link>
    </>
  )
}

export default CartWidget
