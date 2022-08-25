console.clear()
const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('contenedor.txt');

const test = async () => {
	const data = await productos.save({ name: "Joaquin", lastName: "Alvarez" });
	console.log(productos.objetos);
}

test();