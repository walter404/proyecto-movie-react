import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail.js'
import Loading from '../Loading/Loading.js'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const dbQuery = doc(db,'productos', detalleId)
        getDoc(dbQuery)
        .then(resp => setProducto ({ id: resp.id, ...resp.data() }))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>

{ loading ? 
                <Loading/>
                : 
                <div>
                     
                     <ItemDetail producto={producto}  />
                </div>
            }
           
        </div>
    )
}

export default ItemDetailContainer
