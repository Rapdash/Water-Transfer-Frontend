import React, { useState, useEffect } from "react";

import { AuthProvider } from "../data/AuthContext";

import { Layout } from "./Layout";


export const App = () => {
    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("lol")
            setAuthState(localStorage.getItem("token"));
        }
    }, []);
    return (
        <AuthProvider value={{ user: authState, setUser: setAuthState }}>
            <Layout />
        </AuthProvider>
    )
}