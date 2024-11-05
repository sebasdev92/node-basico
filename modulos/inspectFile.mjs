const frutas = ["Manzana", "Uva", "Pera", "Naranja"];

function encontrarFruta(frutaBuscada) {
  const frutaEncontrada = frutas.find((fruta) => fruta === frutaBuscada);
  if (frutaEncontrada) {
    console.log(`Encontre la fruta -> ${frutaBuscada}`);
  } else {
    console.log(`La fruta buscada no existe`);
  }
}

const frutaUsuario = 'pera'
encontrarFruta(frutaUsuario)
