import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import './App.css';



import NavBarMovies from './componentes/layauts/NavBar';


import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './cart/Cart';


function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={ <NavBarMovies /> }>
                
                <Route path="/" element = { <ItemListContainer  saludo={'Hola soy el componente contenedor pos 1'} /> } />
                <Route path="/categoria/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
                <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
                <Route path="/cart" element={<Cart/>}/>
                <Route path='*' element={ <Navigate replace to="/" /> } />
                </Route>
            </Routes>
            </BrowserRouter>

            
           
           
                 
        </div>
        
        
    );
}

export default App;