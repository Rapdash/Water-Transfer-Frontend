// Router for the App
// Renders the Header & Menu + a page determined by the app's history object

import React from "react";

import { IonApp, IonSplitPane, IonContent, IonRouterOutlet } from "@ionic/react";
import { Route, Switch } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { Header } from "./Header";

import { LoginPage } from "../../Pages";
import { LogoutPage } from "../../Pages";
import { login } from "../../constants/routes";


export const Router = () => (
    <IonRouterOutlet>
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
    </IonRouterOutlet>
)