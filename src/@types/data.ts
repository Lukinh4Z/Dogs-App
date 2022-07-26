export interface IData {
  email: string;
  id: number;
  nome: string;
  username: string;
}

export type UserContexType = {
  data: IData | null;
  login: boolean;
  loading: boolean;
  error: object | null;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
};
