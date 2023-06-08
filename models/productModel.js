

const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const productSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: { 
        type: Number, 
        required: true
    },
    stock: {
        type: Number, 
        required: true
    },
    tiemestamp: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('Product', productSchema);