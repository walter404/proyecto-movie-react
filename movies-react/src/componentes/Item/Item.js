import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'
import '../../componentes/Item/Item.css'

const Item = ({ name, price, img}) => {
  return (
    
      <Card className='Card-Item ' style={{ width: '18rem' }}>
      <img className="item-img" src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{`Precio: $${price}`}</p>
                <ItemCount stock="10" onAdd={(cont)=>console.log(`${cont} unidades agregada del carrito`)}/>
            </div>
      </Card>
    
  )
}

export default Item
