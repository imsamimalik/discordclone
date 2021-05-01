import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
    //Step-1
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://discord.com/assets/bb408e0343ddedc0967f246f7e89cebf.svg"
                    alt=""
                />
            </div>
            <p>
                Discord Clone by{" "}
                <a href="https://imsamimalik.com/">Sami Malik ❤</a>
            </p>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
