import { ChangeEventHandler } from "react";

export interface IFormInput {
  type: string;
  error: string | null;
  id: string;
  label: string;
  value?: string;
  setChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: () => boolean;
}

export interface IValidation {
  [type: string]: {
    regex: RegExp;
    message: string;
  };
}

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
