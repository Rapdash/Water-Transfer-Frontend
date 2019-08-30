import React from "react";
import { IonMenu, IonHeader, IonToolbar, IonMenuToggle, IonTitle, IonItem, IonList, IonContent } from "@ionic/react";

import { MenuListItems } from "./MenuListItems";

export const SideMenu = () => {
    return (
        <IonMenu contentId="menu-content">
        <IonHeader>
            <IonToolbar color="primary">
                <IonMenuToggle /> {/* This doesn't "do" anything, but a quirk with ionic requires it for split pane */}
                <IonTitle className="ion-text-center">Water Transfer Platform</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList className="ion-no-padding">
                <IonItem color="medium">
                    <IonTitle className="ion-text-center">Menu</IonTitle>
                </IonItem>
                {MenuListItems()}
            </IonList>
        </IonContent>
    </IonMenu>
    )
}