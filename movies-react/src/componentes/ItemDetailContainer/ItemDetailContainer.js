import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail.js'
import { getFetch } from '../../helpers/getFetch'
import Loading from '../Loading/Loading.js'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch(detalleId)  // fetch llamada a una api  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
