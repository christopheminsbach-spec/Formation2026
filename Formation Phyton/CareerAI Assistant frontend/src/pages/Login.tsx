import {
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import {
    useAuth
} from "../context/AuthContext";


import "./Login.css";



export default function Login(){


    const navigate =
        useNavigate();


    const {
        login
    } = useAuth();



    const [email,setEmail] =
        useState("");


    const [password,setPassword] =
        useState("");


    const [error,setError] =
        useState("");


    const [loading,setLoading] =
        useState(false);





    async function handleSubmit(
        e:React.FormEvent<HTMLFormElement>
    ){


        e.preventDefault();


        setError("");

        setLoading(true);



        try{


            await login(
                email,
                password
            );



            navigate(
                "/dashboard"
            );



        }catch(error:any){



            console.error(
                "Erreur connexion :",
                error
            );



            setError(
                error.response?.data?.message
                ||
                "Email ou mot de passe incorrect"
            );



        }finally{


            setLoading(false);


        }


    }





    return (

        <div className="login-page">


            <div className="login-card">



                <div className="login-logo">

                    🤖

                </div>




                <h1>

                    CareerAI Assistant

                </h1>




                <p className="login-subtitle">

                    Connectez-vous à votre espace professionnel

                </p>





                {
                    error && (

                        <div className="login-error">

                            {error}

                        </div>

                    )
                }






                <form
                    onSubmit={handleSubmit}
                >





                    <div className="form-group">


                        <label>

                            Email

                        </label>



                        <input

                            type="email"

                            placeholder="email@example.com"

                            value={email}


                            onChange={
                                (e)=>
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


                            placeholder="Votre mot de passe"



                            value={password}



                            onChange={
                                (e)=>
                                setPassword(
                                    e.target.value
                                )
                            }



                            required


                        />



                    </div>







                    <button

                        type="submit"


                        className="login-button"


                        disabled={loading}


                    >


                        {

                            loading

                            ?

                            "Connexion..."

                            :

                            "Se connecter"

                        }



                    </button>





                </form>






                <div className="register-link">


                    Vous n'avez pas encore de compte ?



                    <button


                        type="button"



                        onClick={
                            ()=>navigate(
                                "/register"
                            )
                        }


                    >


                        Créer un compte


                    </button>



                </div>





            </div>



        </div>


    );

}