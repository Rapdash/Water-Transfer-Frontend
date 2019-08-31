import React, { useState } from "react";
import Axios from "axios";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const fetchData = async () => {
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

    return <div>LOL</div>
}