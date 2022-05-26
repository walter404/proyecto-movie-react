import { FaCartArrowDown } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import '../CartWidget/Cart.css'

const CartWidget = () => {

  return ( 
  <>
    <Link to='/cart'>
        <div>
          <FaCartArrowDown className='carrito' />
          <span className='number'></span>
        </div>
    </Link>
  </>
  )
}

export default CartWidget
