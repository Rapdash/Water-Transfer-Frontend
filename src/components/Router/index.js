import React from "react";

import { IonApp, IonSplitPane, IonContent } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { SideMenu } from "./SideMenu";
import { Header } from "./Header";


export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <Header />
            <IonSplitPane contentId="menu-content">
                <SideMenu />
                <IonContent id="menu-content">
                    <Switch>
                        <Route path="/" component={} />
                    </Switch>
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)