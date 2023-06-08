const Producto = require('../models/productModel')

const dameProductos = () => {

    const todos = Producto.find({}, {"nombre": 1, "precio": 1, "stock": 1})
    return todos;

}

const crearProducto = (producto) => {

    Producto.create(producto)

}

const actualizarProducto = (id, productoActualizar) => {

    const actualizado = Producto.findByIdAndUpdate(id, productoActualizar);

    return actualizado;

}

const borrarProducto = (id) => {

    const borrado = Producto.findByIdAndDelete(id);
    return borrado;
}

module.exports = {
    dameProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto
}