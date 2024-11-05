import {EventEmitter} from 'events'

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

function saludoSimple() {
    console.log('hola soy el evento saludar');
}

//crear nuestro evento
myEmitter.on('saludar', saludoSimple)

//Emitir el evento
myEmitter.emit('saludar')

export {myEmitter}