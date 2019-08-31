import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../data/AuthContext";
import { login } from "../../constants/routes";

export const LogoutPage = () => {
    const auth = useContext(AuthContext);
    console.log(auth.setUser);
    auth.setUser(null);
    console.log(auth.user);
    localStorage.removeItem("token");
    console.log("works")
    return (
        <Redirect to={login} />
    )
}
