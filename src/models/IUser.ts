export interface ILogin {
  email: string | undefined;
  password: string | undefined;
}

export interface IRegister extends ILogin {
  firstName: string | undefined;
  lastName: string | undefined;
  gender: string | undefined;
  mobile: string | undefined;
  userRole: string | undefined;
}
