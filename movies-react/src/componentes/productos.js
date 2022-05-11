import './estilos/estilos.css'
import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import Image1 from "../componentes/image/pelicula-1.jpg"
import Image2 from "../componentes/image/pelicula-2.jpg"
import Image3 from "../componentes/image/pelicula-3.jpg"
import Image4 from "../componentes/image/pelicula-4.jpg"
import Image5 from "../componentes/image/pelicula-5.jpg"

const products = [
    {id: "01", categoria: "accion", name: "Proyecto Rampage", price: 300, img: Image1},
    {id: "02", categoria: "accion", name: "Proyecto Rampage", price: 350, img: Image2},
    {id: "03", categoria: "accion", name: "Proyecto Rampage", price: 400, img: Image3},
    {id: "04", categoria: "accion", name: "Proyecto Rampage", price: 450, img: Image4 },
    {id: "05", categoria: "accion", name: "Proyecto Rampage", price: 500, img: Image5}
];

const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
})


const Productos = () => {

    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    useEffect(() => {
        getFetch
        .then(res => setItems(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

  return (
    <div className="Productos">
      
      <h1>Productos</h1>    
       {loader? <h2 >Procesando...</h2> :
       <ItemList items={items} />}
    </div>
  )
}

export default Productos







