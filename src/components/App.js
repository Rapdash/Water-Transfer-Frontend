import React, { useState } from "react";

import { Router } from "./Router";
import { AuthProvider } from "../data/AuthContext";

export const App = () => {
    const [authState, setAuthState] = useState({ user: null });
    return (
        <AuthProvider value={{ user: authState, setUser: setAuthState }}>
            <Router />
        </AuthProvider>
    )
}