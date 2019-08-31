// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from "react";
import { Route, Switch } from "react-router-dom";

import { LoginPage } from "../../../Pages";
import { LogoutPage } from "../../../Pages";

import { logout, login } from "../../../constants/routes";


export const Routes = () => (
    <>
        <Switch>
            {/* Authed */}
            <Route path={logout} component={LogoutPage} />
            {/* Non-Authed */}
            <Route path={login} exact component={LoginPage} />
        </Switch>
    </>
)