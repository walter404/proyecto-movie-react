import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../componentes/Item/Item.css'


const Item = ({prod}) => {

  return (
<div className='Content'>
    <Card className='card' style={{ width: '30rem' }}>                        

                <Card.Body>                        
                        <div className="card-header">
                            {`${prod.name} - ${prod.categoria}`}                                                                                                                                                                                                        
                        </div>
                        <div className="card-body">
                            <img src={prod.foto} alt='ima' className='w-50' />
                                                                                        
                        </div>
                        <Card.Text>precio:{prod.price}</Card.Text>
                    <Link to={`/detalle/${prod.id}`}>
                        <div className="card-footer">  
                            <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                            </button>                
                        </div>
                    </Link> 
                </Card.Body>
            
   </Card> 
</div>  
  )
}

export default Item