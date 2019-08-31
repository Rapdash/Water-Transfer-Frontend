import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../data/AuthContext";

export const LogoutPage = () => {
    const auth = useContext(AuthContext);
    auth.setUser(null);
    localStorage.removeItem("token");
    return <Redirect to="/" />
}