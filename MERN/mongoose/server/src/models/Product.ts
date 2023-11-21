import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces/product";

const productSchema = new Schema<IProduct>(
  {
    store: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    price: { type: Number, required: true, default: 0 },
    images: {
      type: [String],
      min: 1,
    },
    sizes: [
      {
        type: String,
        enum: {
          values: ["S", "M", "L", "XL"],
          message: "{VALUE} no es un tamaño válido",
        },
      },
    ],
    colors: [
      {
        type: String,
        enum: {
          values: ["Rojo", "Blanco", "Negro"],
          message: "{VALUE} no es un color válido",
        },
      },
    ],
    tags: [{ type: String }],
    slug: { type: String, unique: true },
    inStock: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

productSchema.index({ name: "text", tags: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
