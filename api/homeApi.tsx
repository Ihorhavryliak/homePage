import { api } from "./api";

export const homeApi = {
  async get() {
    try {
      const response = await api.post<any>("user/auth/sign-in");

      return response.data;
    } catch (e) {
      throw e;
    }
  },
};
