import { Types } from "mongoose";

export interface IProduct {
  _id: string;
  store: Types.ObjectId;
  category: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: ISize[];
  colors: IColor[];
  tags: string[];
  slug: string;
  inStock: number;
}

export type ISize = "S" | "M" | "L" | "XL";
export type IColor = "Rojo" | "Blanco" | "Negro";
