import React from 'react';
import { IonMenu, IonTitle, IonItem, IonList, IonContent } from '@ionic/react';

import { MenuList } from './MenuList';

export const SideMenu = () => {
  return (
    <IonMenu contentId="menu-content">
      <IonContent>
        <IonList className="ion-no-padding">
          <IonItem color="medium">
            <IonTitle className="ion-text-center">Menu</IonTitle>
          </IonItem>
          <MenuList />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
