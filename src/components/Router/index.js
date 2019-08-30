import React from "react";

import { IonApp, IonHeader, IonSplitPane, IonContent, IonIcon, IonButtons, IonToolbar, IonTitle, IonMenuToggle, IonButton } from "@ionic/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { menu } from "ionicons/icons";

import { SideMenu } from "../SideMenu";

import "./router.module.css";

export const Router = () => (
    <BrowserRouter>
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon icon={menu} />
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>
                    <IonTitle className="ion-text-center">Water Transfer Platform</IonTitle>
                    {/* This Button Just for Specing */}
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonSplitPane contentId="menu-content">
                <SideMenu />
                <IonContent id="menu-content">
                </IonContent>
            </IonSplitPane>
        </IonApp>
    </BrowserRouter>
)