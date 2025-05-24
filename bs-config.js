module.exports = {
  proxy: "http://localhost:3000", // Tu servidor Express
  files: ["docs/**/*.*"], // Archivos que deben hacer reload
  port: 3001, // Puerto en el que BrowserSync servirá la web
  open: true, // Abre el navegador automáticamente
  reloadDelay: 500, // Espera antes de recargar tras reiniciar servidor
};
