const Servicio = require('../services/servicesProduct')

const getProduct = async (req, res) => {

    const todosLosProductos = await Servicio.dameProductos()
    //console.log(todos);
    res.status(200).json(todosLosProductos);

}


const createProduct = (req, res) => {

    const { nombre, precio, stock } = req.body

    console.log(`Los datos recibidos son: ${nombre}, ${precio}, ${stock}`);

    Servicio.crearProducto(req.body);

    res.status(200).json({ 
        mensaje: 'Producto creado correctamente',
        nombre: nombre,
        precio: precio,
        stock: stock
    })

}


const updateProduct = async (req, res) => {

    const { 
        body, 
        params: { id } 
    } = req

    //console.log(body, id)

    try {
        const productoActualizado = await Servicio.actualizarProducto(id, body);
        
        res.status(200).json({
            mensaje: 'Producto actualizado correctamente',
            productoActualizado
        })
        
    } catch (error) {
        console.log(error);
    }
  //console.log(productoActualizado);

}


const deleteProduct = async (req, res) => {

    const { 
        params: { id } 
    } = req

    try {
        const productoBorrado = await Servicio.borrarProducto(id);
    
        res.status(200).json({
            mensaje: 'Producto borrado correctamente',
            productoBorrado
        })
        
    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}