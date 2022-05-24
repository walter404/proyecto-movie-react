import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'



import ItemList from "../ItemList/ItemList.js"
import { getFetch } from "../../helpers/getFetch.js"
import Loading from "../Loading/Loading.js"


const ItemListContainer = ( { saludo='Lo mas nuevo' } ) => {      
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()  // fetch llamada a una api  
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

    
    


    
    return (
        <div>
            {saludo} 
            
            { loading ? 
                <Loading/>
                : 
                 <div style={{padding: 25,  display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems:'center'}}>
                     
                    <ItemList productos={productos} />
                </div>
            }
        </div>

    )
}

export default ItemListContainer
