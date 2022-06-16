import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);


    function addToCart(item) { 
        const index = cartList.findIndex(product => product.id === item.id)
        if (index !== -1) {
            const cantidadVieja = cartList[index].cantidad
            cartList[index].cantidad = cantidadVieja + item.cantidad
            setCartList([...cartList])
        } else {
            setCartList( [
            ...cartList,
            item
        ] )
        }
        
    }

    const removeItem =(id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const  quantityTotal = () =>{
        return cartList.reduce((contador, prod) => contador += prod.cantidad ,0)
    }

    const overallPrice = () => {
        return cartList.reduce((contador, prod) => contador + (prod.cantidad * prod.price) ,0)
    }

    const clearCarrito = () => {
        setCartList([])
    }



  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCarrito,
        removeItem,
        quantityTotal,
        overallPrice
    }}>
        {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider
