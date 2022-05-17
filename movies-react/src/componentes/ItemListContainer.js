import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


import ItemList from "../componentes/ItemList/ItemList.js"
import { getFetch } from "../helpers/getFetch.js"


const ItemListContainer = ( { saludo='saludo' } ) => {      
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch(id)  // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categoria === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])

    
    
    console.log(productos)

    
    return (
        <div>
            {saludo} 
            
            { loading ? 
                <h2>Cargando...</h2> 
                : 
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList productos={productos} /> 
                    
                </div>
            }
        </div>

    )
}

export default ItemListContainer
