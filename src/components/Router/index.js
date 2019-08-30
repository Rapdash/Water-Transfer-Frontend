import React from "react";
import { IonApp, IonHeader, IonSplitPane, IonMenu, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel, IonButton, IonMenuButton, IonMenuToggle } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./router.module.css";

export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <IonSplitPane contentId="menu-content">
                <IonMenu contentId="menu-content">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonMenuToggle /> {/* This doesn't "do" anything, but a quirk with ionic requires it for split pane */}
                            <IonTitle className="ion-text-center">Water Transfer Platform</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent color="medium">
                        <IonList className="ion-no-padding">
                            <IonItem color="light">
                                <IonTitle className="ion-text-center">Menu:</IonTitle>
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonContent id="menu-content">
                    <IonHeader>
                        <IonMenuButton></IonMenuButton>
                    </IonHeader>
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)