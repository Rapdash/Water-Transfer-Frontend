import React from "react";
import { IonApp, IonContent, IonSplitPane } from "@ionic/react";

import { Header } from "./Header";
import { Router } from "./Router";
import { SideMenu } from "./SideMenu";

export const Layout = () => (
    <IonApp>
        <Header />
        <IonContent>
            <IonSplitPane contentId="menu-content">
                <SideMenu />
                <IonContent id="menu-content">
                    <Router />
                </IonContent>
            </IonSplitPane>
        </IonContent>
    </IonApp>
)