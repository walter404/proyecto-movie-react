import React, { useState } from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import swal from 'sweetalert';
import {useCartContext} from '../../context/CartContext'
import '../Form/Form.css'

const Form = () => {
    const [dataForm, setDataForm] = useState({email:'', phone:'', name:''})
    const {cartList,clearCarrito, overallPrice} = useCartContext()

    // const alert = (resp)=>{
        
    // }

    async function generateOrder(e) {
        e.preventDefault()
        let orden = {}     
        
        orden.buyer = dataForm
        orden.total = overallPrice()
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const quantity = cartItem.cantidad
            const price = cartItem.price * cartItem.cantidad
            
            
            return {id, name, price, quantity}   
        })   
        
        // crear
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then(resp => swal("Gracias por su compra","codigo de compra :"+ resp.id , "success"))
        .catch(err => console.log(err))
        .finally(()=> clearCarrito() ) 
    
    
    
        // actualizar el stock
        const queryCollectionStock = collection(db, 'productos')
    
        const queryActulizarStock = await query(
            queryCollectionStock,                   
            where( documentId() , 'in', cartList.map(it => it.id) )        
        )
    
        const batch = writeBatch(db)
    
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> swal("LISTO"))

        batch.commit()
    
    
    }   

    const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
      <center>
          <form 
              className='form-control w-50 mt-5;'
              onSubmit={generateOrder}         
              
          >
              <h5 style={{color: 'tomato'}}>Formulario: </h5>                
              <input 
                  className='form-control'
                  type='text' 
                  name='name' 
                  autoComplete="nope"
                  placeholder='Ingrese el nombre' 
                  value={dataForm.name}
                  onChange={handlerChange}
              /><br />
              <input 
                  className='form-control'
                  type='text' 
                  name='phone'
                  autoComplete="nope"
                  placeholder='Ingrese el telefono' 
                  value={dataForm.phone}
                  onChange={handlerChange}
              /><br/>
              <input 
                  className='form-control'
                  type='email' 
                  name='email'
                  autoComplete="nope"
                  placeholder='Ingrese el email' 
                  value={dataForm.email}
                  onChange={handlerChange}
              /><br/>
              <input 
                  className='form-control'
                  type='email' 
                  name='email1'
                  autoComplete="nope"
                  placeholder='repita email' 
                  value={dataForm.email}
                  onChange={handlerChange}
              /><br/>
              
              <button  className="btn btn-outline-primary"  onClick={generateOrder} >Terminar Compra</button>
          </form>
      </center>
    </div>
  )
}

export default Form
