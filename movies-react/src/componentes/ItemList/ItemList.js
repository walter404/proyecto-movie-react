import Item from '../../componentes/Item/Item.js'
import '../ItemList/ItemList.css'

const ItemList = ({productos}) => {
  return (
    
      productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
    
  )
}

export default ItemList