import { Schema, model } from "mongoose";
import { IStore } from "../interfaces/store";

const storeSchema = new Schema<IStore>(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId /** @todo ref */,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Store = model<IStore>("Store", storeSchema);
export default Store;
