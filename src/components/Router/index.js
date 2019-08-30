import React from "react";
import { IonApp, IonHeader, IonSplitPane, IonMenu, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <IonSplitPane contentId="menu-content">
                <IonMenu contentId="menu-content">
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle className="ion-text-center">Water Transfer Platform</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            <IonItem>
                                <IonLabel className="ion-text-center">Menu</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonContent id="menu-content">
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)