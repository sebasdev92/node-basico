import { myEmitter } from "./eventEmitter.mjs";

function saludoGenial(){
    console.log('Que onda, me alegra mucho verte! :) ');
    
}
myEmitter.on('saludar', saludoGenial )

myEmitter.emit('saludar')