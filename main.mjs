import {blue, green} from 'colorette' //ES6
import {createServer} from 'http'

// Crear un servidor HTTP basico
const server = createServer((req, res) => {
    // Escribir la respuesta al cliente
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(green('respondiendo.....'));
    
    res.end('Hola esta es mi primera respuesta :D');
});

// Escuchar servidor en el puerto 3005
server.listen(3005, ()=>{
    console.log(blue('El servidor esta corriendo en el puerto 3005'));
})