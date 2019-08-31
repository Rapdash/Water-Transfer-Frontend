import { createContext } from "react";

const AuthContext = createContext({});

export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = AuthContext.Provider;
export default AuthContext;