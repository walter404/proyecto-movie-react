import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'
const ItemDetail = ({producto}) => {

    function onAdd(cant) {
        console.log(cant)
    }

    return (
      <div className="row" >
        <div className="col">
          <img className="imagen" alt="ima" src={producto.foto} />
        </div>
        <div className="col">
            <h1>{producto.name}</h1>
              <h2>{producto.categoria}</h2>
                <h3>{producto.price}</h3>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>

      </div>
    )
  }
  
  export default ItemDetail
  