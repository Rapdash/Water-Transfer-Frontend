// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LoginPage } from "../../Pages";
import { LogoutPage } from "../../Pages";

import { login } from "../../constants/routes";


export const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* Non-Authed */}
            <Route path={login} exact component={LoginPage} />
            {/* Authed */}
            <Route path="/logout" component={LogoutPage} />
        </Switch>
    </BrowserRouter>
)