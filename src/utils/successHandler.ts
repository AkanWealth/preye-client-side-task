export type IData = {
  data: {
    message: string;
    user: {
      id: number;
      fullname: string;
      email: string;
      password: string;
      username: string;
    };
  };
  status?: number;
  token: {
    access_token?: string;
  };
};
