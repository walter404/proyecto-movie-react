import  { useState } from 'react'
import './ItemCount.css';




const ItemCount  = ({onAdd,initial, stock}) => {
    const [cont, setCont] = useState(initial)
    
    function increase(){
        if (cont < stock){
        setCont(cont + 1)}
        else{
            alert('Producto en stock limitado')
        } 
    }

    function decrease(){
        if(cont> 1){setCont(cont - 1)}
        else{
        alert('Por favor agrege un producto para poder eliminar')}
    }
    

  return (
    <>
        <div className='Item-Count'>
            
            <button onClick={increase} className="btn btn-primary">+</button>
            { cont }
            <button onClick={decrease} className="btn btn-primary">-</button><br/>
            </div>
            <div className='Cart'>
                <button onClick={()=> onAdd(cont)} className="btn btn-primary">Agregar al carrito</button>
            </div>
        
    </>
  )
}

export default ItemCount