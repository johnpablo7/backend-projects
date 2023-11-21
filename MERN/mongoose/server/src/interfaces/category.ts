import { Types } from "mongoose";

export interface ICategory {
  _id: string;
  store: Types.ObjectId;
  name: string;
  categoryId?: string;
}
