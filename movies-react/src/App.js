import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//importamos los componentes creados
import Productos from './componentes/productos';
import Contacto from './componentes/contacto';

import NavBarMovies from './componentes/layauts/navBar';
import Menu from './componentes/menu';

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
        </div>
    );
}

export default App;