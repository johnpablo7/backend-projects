import { Types } from "mongoose";

export interface IStore {
  name: string;
  owner: Types.ObjectId;
}
