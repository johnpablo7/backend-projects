import app from "./app";
import { PORT } from "./config";
import "./config/db";

const server = app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto:", PORT);
});

process.on("SIGINT", () => {
  console.log("Apagando el servidor...'");
  server.close(() => {
    console.log("El servidor se ha cerrado.");
    process.exit(0);
  });
});
