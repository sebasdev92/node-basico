import { promises as fs } from "fs";

//ruta o path del archivo escritura/lectura
const filePath = "./archivo.txt";

async function escribirArchivo(contenido) {
  try {
    await fs.writeFile(filePath, contenido, "utf-8");
    console.log(`Archivo creado en la ruta : ${filePath}`);
  } catch (error) {
    console.error("Error al escribir el archivo");
  }
}

async function leerArchivo() {
  try {
    await fs.readFile(filePath, "utf-8");
    console.log(`Contenido del archivo en la ruta : ${filePath}`);
  } catch (error) {
    console.error("Error al leer el archivo");
  }
}

await escribirArchivo("Primer archivo by ipcoders :)");
await leerArchivo();
