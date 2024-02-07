interface Response {
  status: number;
  data: string[];
}

export interface IError {
  response: Response;
}
