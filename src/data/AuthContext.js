import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = AuthContext.Provider;
export default AuthContext;