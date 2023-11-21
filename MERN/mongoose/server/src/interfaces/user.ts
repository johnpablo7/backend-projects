export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: string;
  birthdate: Date;
  genre: string;
  phone: string;
  country: string;
  department: string;
  city: string;
  shippingAddres: string;
}
