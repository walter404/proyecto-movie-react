import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import '../clear/Clear.css'


export  function AlertDismissibleExample() {
        const [show, setShow] = useState(true);
      
        if (show) {
          return (
            <div className='alerta'>
                <Alert variant="danger" onClose={() => setShow(true)} dismissible>
                    <Alert.Heading>No hay producto en su carrito!</Alert.Heading>
                    <p>
                    Agrege un producto para poder ver en detalle lo agregado.
                    </p>
                </Alert>
                <Link to='/ItemListContainer'><button className='btn btn-outline-secondary' onClick={() => setShow(false)}>volver menu de compra</button></Link>
            </div>
            
          );
        }
        
      }
      
    export default AlertDismissibleExample 

