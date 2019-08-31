import React, { useState, useEffect } from "react";

import { AuthProvider } from "../data/AuthContext";

import { Layout } from "./Layout";
import { IonSpinner } from "@ionic/react";
import Axios from "axios";


export const App = () => {
    const [authState, setAuthState] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const authCheck = async () => {
            if (localStorage.getItem("token")) {
                try {
                    const response = await Axios.get("http://localhost:9001/user/account", { headers: { Authorization: localStorage.getItem("token")}});
                    setAuthState(response.data);
                    setIsLoaded(true);
                } catch {
                    setAuthState(null);
                    setIsLoaded(true);
                }
            } else {
                setAuthState(null);
                setIsLoaded(true);
            }
        }
        authCheck();
    }, []);
    return (
        <AuthProvider value={{ user: authState, setUser: user => setAuthState(user) }}>
            {!isLoaded && <IonSpinner />}
            {isLoaded  && <Layout />}
        </AuthProvider>
    )
}