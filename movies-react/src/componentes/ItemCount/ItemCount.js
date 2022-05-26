import  { useState } from 'react'
import './ItemCount.css';




const ItemCount  = ({onAdd,initial, stock}) => {
    const [cont, setCont] = useState(initial)
    
    function crementar(){
        if (cont < stock){
        setCont(cont + 1)}
        else{
            alert('Producto en stock limitado')
        } 
    }

    function decrementar(){
        if(cont> 1){setCont(cont - 1)}
        else{
        alert('Por favor agrege un producto para poder eliminar')}
    }
    
    // function addToCart () {
    //     onAdd(cont,producto.name);
    //     handleInputType();
    // }
    
    
//onClick={()=>{addToCart(producto,cont)}

  return (
    <>
        <div className='Item-Count'>
            
            <button onClick={crementar} className="btn btn-primary">+</button>
            { cont }
            <button onClick={decrementar} className="btn btn-primary">-</button><br/>
            </div>
            <div className='Cart'>
                <button onClick={()=> onAdd(cont)} className="btn btn-primary">Agregar al carrito</button>
            </div>
        
    </>
  )
}

export default ItemCount