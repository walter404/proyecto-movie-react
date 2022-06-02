import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList.js"
import Loading from "../Loading/Loading.js"


const ItemListContainer = ( { saludo='Lo mas nuevo' } ) => {      
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

   useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryCollectionFilter = id ? query(queryCollection, where('categoria','==',id)) : queryCollection
    getDocs(queryCollectionFilter)
    .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data() })) ))
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
    
 },[id]);


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
