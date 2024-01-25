import { instance, next } from "./baseUrl";

// export const createAccount = async (value: IUser) => {
export const createAccount = async (value: unknown) => {
  const { data } = await instance(false)
    .post(`users/register`, value)
    .catch(() => next());

  return data;
};

// export const login = async (value: Partial<IUser>) => {
export const login = async (value: unknown) => {
  const { data } = await instance(false)
    .post(`auth/login`, value)
    .catch(() => next());
  return data;
};

export const verifyUser = async (value: unknown) => {
  const { data } = await instance(false)
    .post(`auth/verify-otp`, value)
    .catch(() => next());
  return data;
};

export const getProfile = async (userId: string) => {
  const { data } = await instance(true)
    .get(`users/profile/${userId}`)
    .catch(() => next());
  return data;
};
