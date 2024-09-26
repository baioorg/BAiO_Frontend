//https://github.com/KWaloen/My-Portolio-Website/blob/main/src/app/ReactProjects/LoginPage/LogInForm.tsx
//enter any username and password of more than 5 figures to log in

import { useState } from "react";
import "./LoginPage.css";
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function LogInForm() {

    const [username, setNewUsername] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();
         
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

              
                router.push("/pages/Main");
        }
    

    function fieldsFilled(event) {
        if (username.length >= 5 && password.length >= 5) {
            return handleSubmit(event);    
        } else {
            alert('User login failed');
            return false;
        }
    }

    return (
        <div className="logInContainer">
            <form onSubmit={fieldsFilled} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="user">User</label>
                    <input
                        value={username}
                        onChange={user => setNewUsername(user.target.value)}
                        type="text"
                        id="user" />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={password => setPassword(password.target.value)}
                        type="text"
                        id="password" />
                </div>
                <button className="btn" type="submit">Sign In</button>
                <Link className = "text link" href="/">Forgot password?</Link>
            </form>
        </div>
    );
} 