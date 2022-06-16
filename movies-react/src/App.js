import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';



import NavBarMovies from './componentes/layauts/NavBar';


import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Cart from './componentes/cart/Cart';
import CartProvider from './context/CartContext';
import Page404 from './componentes/Err/Page404';



function App() {
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
            <Routes>
                <Route path='/' element={ <NavBarMovies /> }>
                
                <Route path="/" element = { <ItemListContainer /> } />
                <Route path="/categoria/:id" element={<ItemListContainer/>} />
                <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
                <Route path="/cart" element={<Cart/>}/>
                <Route path='*'  element={<Page404/>} />
                </Route>
            </Routes>
            </CartProvider>
            </BrowserRouter>
            
           
                          
        </div>
        
        
    );
}

export default App;