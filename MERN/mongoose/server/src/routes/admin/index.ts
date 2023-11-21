import { Router } from "express";
import { Product } from "../../models";

export const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.json({ message: "Bienvenido administrador" });
});

adminRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error del servidor!" });
  }
});

adminRouter.post("/products", async (req, res) => {
  // console.log("Cuerpo", req.body);
  const product = new Product(req.body);
  try {
    await product.save();
    res.json({ message: "Producto registrado", product });
  } catch (error) {
    res.json({ message: "Error", error });
  }
});
