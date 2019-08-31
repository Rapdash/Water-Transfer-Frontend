// Router for the App
// Renders the Header & Menu + a page determined by the App's History

import React from "react";

import { IonApp, IonSplitPane, IonContent } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { Header } from "./Header";

import { LoginPage } from "../../Pages";
import { LogoutPage } from "../../Pages";
import { login } from "../../constants/routes";


export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <Header />
            <IonContent>
                <IonSplitPane contentId="menu-content">
                    <SideMenu />
                    <IonContent id="menu-content">
                        <Switch>
                            {/* Non-Authed */}
                            <Route path={login} exact component={LoginPage} />
                            {/* Authed */}
                            <Route path="/logout" component={LogoutPage} />
                        </Switch>
                    </IonContent>
                </IonSplitPane>
            </IonContent>
        </IonApp>
    </BrowserRouter>
)