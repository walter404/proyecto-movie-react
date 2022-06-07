import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import './App.css';



import NavBarMovies from './componentes/layauts/NavBar';


import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Cart from './componentes/cart/Cart';
import CartProvider from './context/CartContext';
//import Login from './componentes/login/Login';


function App() {
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
            <Routes>
                <Route path='/' element={ <NavBarMovies /> }>
                
                <Route path="/" element = { <ItemListContainer  saludo={'Hola soy el componente contenedor pos 1'} /> } />
                <Route path="/categoria/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
                <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
                <Route path="/cart" element={<Cart/>}/>
                <Route path='*' element={ <Navigate replace to="/" /> } />
                </Route>
            </Routes>
            </CartProvider>
            </BrowserRouter>
            
           
                          
        </div>
        
        
    );
}

export default App;