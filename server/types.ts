export enum Roles {
  ADMIN = "admin",
  CUSTOMER = "customer"
}

export type TTokenData = {
  email: string;
  role: Roles;
  iat: number;
  exp: number;
};
