import { createContext } from "react";
import { User } from "../types/user";

export interface AuthContext {
  user: User | null;
  setUser: (user: any | null) => void;
}

export const AuthContext = createContext<AuthContext | null>(null);
