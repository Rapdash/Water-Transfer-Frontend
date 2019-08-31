import React, { useState, useEffect } from "react";
import { IonApp, IonContent, IonSplitPane } from "@ionic/react";

import { AuthProvider } from "../data/AuthContext";

import { Router } from "./Router/index"; // Not sure why webpack doesn't like the /index-less import
import { Header } from "./Router/Header";
import { SideMenu } from "./Router/SideMenu";


export const App = () => {
    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("lol")
            setAuthState(localStorage.getItem("token"));
        }
    }, []);
    return (
        <AuthProvider value={{ user: authState, setUser: setAuthState }}>
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
            <Router />
        </AuthProvider>
    )
}