import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../services/authService";

import "./Register.css";


export default function Register() {


    const navigate = useNavigate();



    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [loading, setLoading] = useState(false);




    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {


        e.preventDefault();


        setError("");

        setSuccess("");

        setLoading(true);



        try {



            const response = await register({

                first_name,

                last_name,

                email,

                password

            });



            console.log(
                "Compte créé :",
                response
            );



            /*
            Si Flask retourne un JWT
            après inscription
            */

            if(response.access_token){


                localStorage.setItem(

                    "access_token",

                    response.access_token

                );


            }



            if(response.user){


                localStorage.setItem(

                    "user",

                    JSON.stringify(response.user)

                );


            }



            setSuccess(
                "Compte créé avec succès"
            );



            setTimeout(() => {


                navigate("/dashboard");


            },1000);




        } catch(err:any){



            console.error(
                "Erreur inscription :",
                err.response?.data
            );



            setError(

                err.response?.data?.message ||

                "Impossible de créer le compte"

            );



        } finally {


            setLoading(false);


        }


    }




    return (


        <div className="register-page">



            <div className="register-card">



                <div className="register-logo">

                    🤖

                </div>




                <h1>

                    Créer un compte

                </h1>




                <p className="register-subtitle">

                    Rejoignez CareerAI Assistant

                </p>





                {
                    error && (

                        <div className="register-error">

                            {error}

                        </div>

                    )
                }




                {
                    success && (

                        <div className="register-success">

                            {success}

                        </div>

                    )
                }






                <form
                    onSubmit={handleSubmit}
                >





                    <div className="form-group">


                        <label>

                            Prénom

                        </label>



                        <input

                            type="text"

                            placeholder="Michel"

                            value={first_name}

                            onChange={
                                e =>
                                setFirstName(
                                    e.target.value
                                )
                            }

                            required

                        />

                    </div>







                    <div className="form-group">


                        <label>

                            Nom

                        </label>



                        <input

                            type="text"

                            placeholder="Dupont"

                            value={last_name}

                            onChange={
                                e =>
                                setLastName(
                                    e.target.value
                                )
                            }

                            required

                        />

                    </div>








                    <div className="form-group">


                        <label>

                            Email

                        </label>



                        <input

                            type="email"

                            placeholder="email@example.com"

                            value={email}

                            onChange={
                                e =>
                                setEmail(
                                    e.target.value
                                )
                            }

                            required

                        />

                    </div>







                    <div className="form-group">


                        <label>

                            Mot de passe

                        </label>



                        <input

                            type="password"

                            placeholder="********"

                            value={password}

                            onChange={
                                e =>
                                setPassword(
                                    e.target.value
                                )
                            }

                            required

                            minLength={6}

                        />

                    </div>







                    <button

                        className="register-button"

                        type="submit"

                        disabled={loading}

                    >


                        {

                            loading

                            ?

                            "Création..."

                            :

                            "Créer mon compte"

                        }



                    </button>




                </form>






                <div className="login-link">


                    Vous avez déjà un compte ?



                    <button


                        type="button"


                        onClick={
                            () => navigate("/login")
                        }


                    >

                        Se connecter

                    </button>



                </div>





            </div>




        </div>


    );


}