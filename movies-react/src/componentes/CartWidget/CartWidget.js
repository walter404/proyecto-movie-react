import { FaCartArrowDown } from 'react-icons/fa' 
import {Link} from 'react-router-dom'
import { useCartContext } from '../../contex/CartContext'
import '../CartWidget/Cart.css'

const CartWidget = () => {

  const {cantidadTotal} = useCartContext()

  return ( 
  <>
    <Link to='/cart'>
        <div>
          <FaCartArrowDown className='carrito' />
          <span className='number'>{cantidadTotal() !== 0 && cantidadTotal()}</span>
        </div>
    </Link>
  </>
  )
}

export default CartWidget
