import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <div>Hola desde React</div>,
//   document.getElementById('root')
// );
const contenido = (
  <div>
    <h1>REACT</h1>
    <div>Hola desde React</div>
  </div>
);

function Componente(){
  return( <div>
    <h1>REACT</h1>
    <div>Hola desde React</div>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Componente/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// reportWebVitals();
