import React, { useState } from "react";
import Axios from "axios";
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonList, IonItem, IonLabel } from "@ionic/react";

export const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const attemptLogin = async () => {
        try {
            const result = await Axios.post("http://localhost:9001/auth", { email, password });
            console.log(result.data);
            if (result.status === 200) {
                localStorage.setItem("token", result.data.token);
            } else if (result.status === 403) {
                setError(result.data.message);
            } else {
                setError("Unknown Error. Contact Admin");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol offsetSm={0} sizeSm={12} offsetMd={1} sizeMd={10} offsetLg={2} sizeLg={8} offsetXl={3} sizeXl={6}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Log In</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                   <IonLabel position="floating">Email</IonLabel>
                                    <IonInput 
                                        value={email} 
                                        onInput={(e) => setEmail(e.target.value)}
                                        type="email"
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput 
                                        value={password} 
                                        onInput={(e) => setPassword(e.target.value)}
                                        type="password"
                                    />
                                </IonItem>
                                <IonItem
                                    className="ion-text-center"
                                    color="primary"                                        button
                                    type="submit"
                                    onClick={() => attemptLogin()}>
                                    <IonLabel>
                                        <strong>Log In</strong>
                                    </IonLabel>
                                </IonItem>
                                {error && 
                                <IonItem className="ion-text-center" color="danger">
                                    <IonLabel>{error}</IonLabel>
                                </IonItem>
                                }
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}