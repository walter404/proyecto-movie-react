import  { useState } from 'react'

import {Card, Button, } from 'react-bootstrap'

const ItemCount = () => {
    const [cont, setCont] = useState(0)
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
  return (
    <div>
      <Card style={{ width: '18rem' }}>
                
            <Card.Body>
                <Card.Title>Producto Selecionado</Card.Title>
                <Card.Text>Cantidad: {cont}</Card.Text>
                <Button variant="primary" onClick={crementar} >+</Button>
                <Button variant="danger" onClick={decrementar}>-</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ItemCount
