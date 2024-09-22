import { PORT } from "./config"
import { app } from "./main"

export const serverListener = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    //* Iniciamos el servidor para que escuche en el puerto especificado
    app
      .listen(PORT, (): void => {
        //* Este callback se ejecuta cuando el servidor ha comenzado a escuchar
        console.log(`Server is running on port ${PORT}`)
        console.log(`Esta ruta es para ver la documentación de las rutas disponibles`)
        console.log(`http://localhost:${PORT}`)
        console.log(`Esta ruta es para el uso de la api`)
        console.log(`http://localhost:${PORT}/api`)

        //* Resolvemos la promesa, indicando que el servidor ha comenzado correctamente
        resolve()
      })
      .on("error", (err) => {
        //! Rechazamos la promesa con un nuevo error que describe el problema
        reject(new Error(`Server failed to start: ${err.message}`))
      })
  })
}

serverListener()
