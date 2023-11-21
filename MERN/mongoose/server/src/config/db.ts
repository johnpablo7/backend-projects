import mongoose from "mongoose";
import { MONGODB_URI } from "../config";

export async function connectToDb() {
  console.log("Conectando a la base de datos...");
  await mongoose.connect(MONGODB_URI, { dbName: "ecommerce" });
  console.log("Conexión exitosa a la base de datos ***");
}

connectToDb().catch((err) => {
  console.log(err);
});
