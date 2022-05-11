import  { useState } from 'react'
import './ItemCount.css';
import { FaBookmark } from "react-icons/fa";
import {Card, Button, } from 'react-bootstrap'



const ItemCount  = ({onAdd, stock}) => {
    const [cont, setCont] = useState(1)
    
    function crementar(){
        if (cont < stock){
        setCont(cont + 1)}
        else{
            
            alert('Producto en stock limitado')
        } 
    }

    function decrementar(){
        if(cont> 1){
        setCont(cont - 1)}
        else{
        alert('Por favor agrege un producto para poder eliminar')}
    }
    
    function addToCart () {
        onAdd(cont)
    }

  return (
    <div className='Item-Count'>
      
            
            <Card.Body className='card'>
                <Card.Text>Cantidad: {cont}</Card.Text>
                <Button className='boton-cre' variant="primary" onClick={crementar} >+</Button>
                <Button className='boton-decre' variant="danger" onClick={decrementar}>-</Button>
                <button className='guardado' onClick={addToCart} ><FaBookmark/></button>
            </Card.Body>
        
    </div>
  )
}

export default ItemCount
