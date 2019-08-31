// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from "react";
import { Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { NonAuthedRoute } from "./NonAuthedRoute";

import { LoginPage } from "../../../Pages";
import { LogoutPage } from "../../../Pages";

import { logout, login } from "../../../constants/routes";


export const Routes = () => (
    <>
        <Switch>
            {/* Authed */}
            <PrivateRoute path={logout} component={LogoutPage} />
            {/* Non-Authed */}
            <NonAuthedRoute path={login} exact component={LoginPage} />
        </Switch>
    </>
)