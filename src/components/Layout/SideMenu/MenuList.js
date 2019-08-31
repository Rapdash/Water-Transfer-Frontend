import React, { useContext } from "react";
import { IonItem, IonLabel, IonIcon } from "@ionic/react";
import { withRouter } from "react-router-dom";

import { menuRoutes } from "../../../constants/menuData";
import AuthContext from "../../../data/AuthContext";

const BaseMenuList = ({ history }) => {
    const auth = useContext(AuthContext);
    // Checks to see if there's a logged-in user then renders appropriate menu
    const items = menuRoutes[( auth.user ? "loggedInPages" : "loggedOutPages")].map(({ title, path, icon }) => {
        return (
            <IonItem button key={title} onClick={() => history.push(path)}>
                <IonLabel>{title}</IonLabel>
                <IonIcon color="primary" icon={icon} slot="start" />
            </IonItem>
            )
        });
    return (
        <>
            {items}
        </>
    )
}

export const MenuList = withRouter(BaseMenuList);