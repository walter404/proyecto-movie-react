import '../ItemList/ItemList.css'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div className='Item-List'>
      {items.map(info => <Item key={info.id} categoria={info.categoria} name={info.name} price={info.price} img={info.img}/>)}
    </div>
  )
}

export default ItemList
