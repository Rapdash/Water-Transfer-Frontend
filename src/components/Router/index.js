import React from "react";

import { IonApp, IonSplitPane, IonContent } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { Header } from "./Header";

import { LoginPage } from "../../Pages/Login";


export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <Header />
            <IonContent>
                <IonSplitPane contentId="menu-content">
                    <SideMenu />
                    <IonContent id="menu-content">
                        <Switch>
                            <Route path="/" exact component={LoginPage} />
                        </Switch>
                    </IonContent>
                </IonSplitPane>
            </IonContent>
        </IonApp>
    </BrowserRouter>
)