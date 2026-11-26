import express from "express";

const aplicacion = express();
const puerto = 3000;

// Habilitar los archivos de nuestra página web
aplicacion.use(express.static("public"));

// Endpoint para comprobar nuestra API
aplicacion.get("/api/estado", (solicitud, respuesta) => {
  respuesta.json({
    tienda: "ALXS.G",
    mensaje: "API funcionando correctamente",
  });
});

// Iniciar servidor
aplicacion.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});
