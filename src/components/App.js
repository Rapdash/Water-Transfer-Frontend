import React, { useState, useEffect } from "react";

import { Router } from "./Router/index"; // Not sure why webpack doesn't like the /index-less import
import { AuthProvider } from "../data/AuthContext";

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
            <Router />
        </AuthProvider>
    )
}