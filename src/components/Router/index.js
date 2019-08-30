import React from "react";

import { IonApp, IonHeader, IonSplitPane, IonContent, IonMenuButton } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SideMenu } from "../SideMenu";

import "./router.module.css";

export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <IonSplitPane contentId="menu-content">
                <SideMenu />
                <IonContent id="menu-content">
                    <IonHeader>
                        <IonMenuButton></IonMenuButton>
                    </IonHeader>
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)