import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//importamos los componentes creados
import Productos from './componentes/Productos';
import Contacto from './componentes/Contacto';


import NavBarMovies from './componentes/layauts/NavBar';
import Menu from './componentes/Menu';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={ <NavBarMovies /> }>
                <Route index element={ <Menu /> } />
                    <Route path='Productos' element={ <Productos /> } />
                    <Route path='Contacto' element={ <Contacto /> } />

                    <Route path='*' element={ <Navigate replace to="/" /> } />
                </Route>
            </Routes>
            </BrowserRouter>
            
                    <ItemListContainer greeting='Hola soy itemListContainer' />
                 
        </div>
        
        
    );
}

export default App;