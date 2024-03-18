export interface CarTypes {
  id: number;
  model: string;
  type: string;
  price: string;
  img: string;
}

interface UserType {
  name: string;
  email: string;
  password: string;
  verify: boolean;
  id: string;
}

interface NewUser {
  name: string;
  email: string;
  password: string;
  verify: boolean;
}

interface IVerification {
  hash: string;
  email: string;
}
