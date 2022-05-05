import  { useState } from 'react'
import './ItemCount.css';
import { FaBookmark } from "react-icons/fa";
import {Card, Button, } from 'react-bootstrap'

const ItemCount  = ({onAdd}) => {
    const [cont, setCont] = useState(1)
    const stock = 10
    function crementar(){
        if (cont < stock){
        setCont(cont + 1)}
        else{
            
            alert('Producto en stock limitado')
        } 
    }

    function decrementar(){
        if(cont){
        setCont(cont - 1)}
        else{
        alert('Por favor agrege un producto para poder eliminar')}
    }
    
    function addToCart () {
        onAdd(cont)
    }

  return (
    <div>
      <Card style={{ width: '18rem'}}>
                
            <Card.Body className='card'>
                <Card.Title>Producto Selecionado</Card.Title>
                <Card.Text>Cantidad: {cont}</Card.Text>
                <Button className='boton-cre' variant="primary" onClick={crementar} >+</Button>
                <Button className='boton-decre' variant="danger" onClick={decrementar}>-</Button>
                <button className='guardado' onClick={addToCart} ><FaBookmark/></button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemCount
