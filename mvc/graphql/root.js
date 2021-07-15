const Producto = require ("../models/productos");
const root = {
    ping() {
        return "pong";
      },
     productos: async () => {
        return await Producto.find();
      },
     createProducto: async ({ nombre,descripcion, precio,stock,url}) => {
        const newProducto = new Producto({ nombre,descripcion, precio,stock,url });
        return await newProducto.save();
      }
}
module.exports = root