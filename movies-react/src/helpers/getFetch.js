const productos = [
    { id: '1', categoria: 'accion', name: "Proyecto Rampage",   price: 2300, foto: '/assets/image/pelicula-1.jpg' },
    { id: '2', categoria: 'nuevo', name: "Batman",  price: 2700, foto: '/assets/image/pelicula-2.jpg' },
    { id: '3', categoria: 'nuevo', name: "Multiverso",   price: 4000, foto: '/assets/image/pelicula-3.jpg' },
    { id: '4', categoria: 'accion', name: "The Gladiador",   price: 6880, foto: '/assets/image/pelicula-4.jpg' },
    { id: '5', categoria: 'accion', name: "Soy Leyenda",   price: 3000, foto: '/assets/image/pelicula-5.jpg' },
    { id: '6', categoria: 'nuevo', name: "Soy Leyenda 2",   price: 2000, foto: '/assets/image/pelicula-5.jpg' },
       
  ]

    
    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                    resolve( query )                           
                }, 2000)
            })            
        
    }
