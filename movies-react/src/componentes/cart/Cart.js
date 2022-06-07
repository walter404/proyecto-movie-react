import Loading from '../Loading/Loading'
import { useCartContext} from '../../context/CartContext'
import Clear from '../clear/Clear'
import './Cart.css'
import { useState } from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'



const Cart = () => {

  const [dataForm, setDataForm] = useState({email:'', phone:'', name:''})
  const {cartList,vaciarCarrito, precioTotal, removeItem} = useCartContext()

  async function generarOrden(e) {
    e.preventDefault()
    let orden = {}     
    
    orden.buyer = dataForm
    orden.total = precioTotal()

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const cantidad = cartItem.cantidad
        const precio = cartItem.price * cartItem.cantidad
        
        
        return {id, nombre, precio, cantidad}   
    })   
    
    // crear
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> vaciarCarrito())



    // actualizar el stock
    const queryCollectionStock = collection(db, 'productos')

    const queryActulizarStock = await query(
        queryCollectionStock,                   
        where( documentId() , 'in', cartList.map(it => it.id) ) // in es que estén en ..         
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    }) ))
    .finally(()=> alert('Compra realizada'))

    batch.commit()


}   

const handlerChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}

    
 
  return (
    <div className='cart-prod'> 
      {cartList?
          (cartList.map(product => <div key={product.id}>
            <div className="cart-item">
              <button className='button btn btn-outline-secondary' onClick={()=> removeItem(product.id)}>X</button>
              <img alt='img' src={product.foto}/>  
            </div>
            <h1 className='cart-name'>{product.name}</h1>
            <span className='cart-price' >precio: {product.price}</span><br/>
            <span className='cart-cantidad'>cantidad: {product.cantidad}</span> 
            <h4 className='cart-total'>El precio total: {precioTotal() !== 0 && precioTotal()}</h4> </div>  ))
            : <Loading/>
      }
    {cartList.length? 
    (
    <div className='clear'><button className='btn btn-outline-secondary' onClick={vaciarCarrito}>Vaciar carrito</button></div>
    )
    : <Clear/> 
    }
     { cartList.length !== 0 &&
      <center>
          <form 
              className='form-control w-50 mt-5'
              onSubmit={generarOrden}         
              
          >
              <h5>Formulario: </h5>                
              <input 
                  className='form-control'
                  type='text' 
                  name='name' 
                  placeholder='Ingrese el nombre' 
                  value={dataForm.name}
                  onChange={handlerChange}
              /><br />
              <input 
                  className='form-control'
                  type='text' 
                  name='phone'
                  placeholder='Ingrese el telefono' 
                  value={dataForm.phone}
                  onChange={handlerChange}
              /><br/>
              <input 
                  className='form-control'
                  type='email' 
                  name='email'
                  placeholder='Ingrese el email' 
                  value={dataForm.email}
                  onChange={handlerChange}
              /><br/>
              <input 
                  className='form-control'
                  type='email' 
                  name='email1'
                  placeholder='repita email' 
                  value={dataForm.email}
                  onChange={handlerChange}
              /><br/>
              
              <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>
          </form>
      </center>
    }
  </div>
  )
}

export default Cart
