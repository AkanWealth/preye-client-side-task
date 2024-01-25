import Cookies from 'js-cookie';

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

export const success = (data: IData) => {
  if (token?.access_token) {
    Cookies.set('Authenticated', data?.access_token, { expires: 30 });
  }

  return data;
};
