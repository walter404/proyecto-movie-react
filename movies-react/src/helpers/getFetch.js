const productos = [
    { id: '1', categoria: 'accion', name: "Proyecto Rampage",   price: 2300, foto: '../build/assets/image/pelicula-1.jpg' },
    { id: '2', categoria: 'nuevo', name: "Batman",  price: 2700, foto: '/assets/image/pelicula-2.jpg' },
    { id: '3', categoria: 'nuevo', name: "Multiverso",   price: 4000, foto: '/assets/image/pelicula-3.jpg' },
    { id: '4', categoria: 'accion', name: "The Gladiador",   price: 6880, foto: '/assets/image/pelicula-4.jpg' },
    { id: '5', categoria: 'accion', name: "Soy Leyenda",   price: 3000, foto: '/assets/image/pelicula-5.jpg' },
    { id: '6', categoria: 'nuevo', name: "Venom",   price: 2500, foto: '/assets/image/pelicula-6.jpg' },
    { id: '7', categoria: 'nuevo', name: "Thor love and thunder",   price: 4500, foto: '/assets/image/pelicula-7.jpg' },
    { id: '8', categoria: 'nuevo', name: "Metal gear",   price: 5800, foto: '/assets/image/pelicula-8.jpg' },
    { id: '9', categoria: 'nuevo', name: "Mision de rescate",   price: 3500, foto: '/assets/image/pelicula-9.jpg' },
  ]

    
    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                    resolve( query )                           
                }, 2000)
            })            
        
    }
