import React from "react";

import { IonApp, IonSplitPane, IonContent } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { Header } from "./Header";

import { LoginPage } from "../../Pages";
import { LogoutPage } from "../../Pages";


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
                            <Route path="/" exact component={LoginPage} />
                            {/* Authed */}
                            <Route path="/logout" component={LogoutPage} />
                        </Switch>
                    </IonContent>
                </IonSplitPane>
            </IonContent>
        </IonApp>
    </BrowserRouter>
)