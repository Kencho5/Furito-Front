export interface RegisterFields {
  name: string;
  surname: string;
  email: string;
  phone_code: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
}
