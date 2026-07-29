import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/authService";
import Input from "../../components/auth/Input";

import "../../styles/Auth.css";


export default function Login() {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    const [message, setMessage] = useState("");



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();


        try {

            const response = await login(form);


            localStorage.setItem(
                "token",
                response.access_token
            );


            navigate("/dashboard");


        } catch(error:any) {


            setMessage(
                error.response?.data?.message
                ||
                "Erreur de connexion"
            );

        }

    };



    return (

        <div className="auth-page">


            <form
                className="auth-card"
                onSubmit={handleSubmit}
            >

                <h1>
                    Connexion
                </h1>


                <Input

                    type="email"

                    placeholder="Email"

                    value={form.email}

                    onChange={handleChange}

                    name="email"

                />


                <Input

                    type="password"

                    placeholder="Mot de passe"

                    value={form.password}

                    onChange={handleChange}

                    name="password"

                />


                <button type="submit">

                    Se connecter

                </button>


                <p>
                    {message}
                </p>


            </form>


        </div>

    );

}