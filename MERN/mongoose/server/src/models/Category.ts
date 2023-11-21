import mongoose, { Schema, model, Model } from "mongoose";
import { ICategory } from "../interfaces/category";

const categorySchema = new Schema<ICategory>(
  {
    store: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: { type: String, required: true, default: "" },
    categoryId: { type: String, required: true, default: "" },
  },
  {
    timestamps: true,
  },
);

const Category: Model<ICategory> =
  mongoose.models.Category || model("Category", categorySchema);

export default Category;
