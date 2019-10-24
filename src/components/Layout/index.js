import React from 'react';
import { IonApp, IonContent, IonSplitPane } from '@ionic/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header';
import { Routes } from '../Routes';
import { SideMenu } from './SideMenu';

export const Layout = () => (
  <IonApp>
    <Router>
      <Header />
      <IonContent>
        <IonSplitPane contentId='menu-content'>
          <SideMenu />
          <IonContent id='menu-content'>
            <Routes />
          </IonContent>
        </IonSplitPane>
      </IonContent>
    </Router>
  </IonApp>
);
