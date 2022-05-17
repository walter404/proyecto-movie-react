import '../ItemList/ItemList.css'
import Item from '../../componentes/Item/Item.js'

const ItemList = ({productos}) => {
  return (
    
      productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
    
  )
}

export default ItemList