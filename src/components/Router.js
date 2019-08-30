import React from "react";
import { IonApp, IonHeader, IonSplitPane, IonMenu, IonToolbar, IonContent, IonTitle } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <IonSplitPane contentId="menu-content">
                <IonMenu contentId="menu-content">
                    <IonHeader color="primary">
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                </IonMenu>
                <IonContent id="menu-content">
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)