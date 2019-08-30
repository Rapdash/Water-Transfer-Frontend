import React, { useState } from "react";
import { AuthProvider, AuthConsumer } from "../data/AuthContext";
import { BrowserRouter as Router,  } from "react-router-dom";

export const App = () => {
    const [authState, setAuthState] = useState({ user: null });
    return (
        <AuthProvider value={{ user: authState, setUser: setAuthState }}>

        </AuthProvider>
    )
}