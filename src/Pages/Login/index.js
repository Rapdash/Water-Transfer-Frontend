import React, { useState } from "react";
import Axios from "axios";
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonList, IonItem, IonLabel } from "@ionic/react";

export const LoginPage = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const attemptLogin = async () => {
        const result = await Axios.post("http://localhost:9001/auth", { email, password });
        console.log(result.data);
        if (result.status === 200) {
            localStorage.setItem("token", result.data.token);
        } else if (result.status === 403) {
            setError(result.data.message);
        } else {
            setError("Unknown Error. Contact Admin");
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
                                    <IonInput value={email} onInput={(e) => setEmail(e.target.value)} placeholder="mail@example.com"></IonInput>
                                </IonItem>
                                <IonItem button onClick={() => console.log(email)}>test</IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}