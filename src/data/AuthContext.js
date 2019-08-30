import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext({
    logIn: async (email, password) => {
        try {
            const res = await axios.post("http://localhost:9001/auth");
            console.log(res);
        } catch {
            
        }
    } 
});