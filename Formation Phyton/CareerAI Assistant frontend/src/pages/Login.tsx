import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css";


export default function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    setError("");

    setLoading(true);


    try {


      const data = await login({

        email,

        password

      });



      console.log(
        "Connexion réussie :",
        data
      );



      /*
       Stockage JWT
      */

      localStorage.setItem(

        "access_token",

        data.access_token

      );



      /*
       Stockage utilisateur
      */

      localStorage.setItem(

        "user",

        JSON.stringify(data.user)

      );



      /*
       Redirection Dashboard
      */

      navigate("/dashboard");



    } catch (err:any) {


      console.error(

        "Erreur connexion :",

        err.response?.data || err

      );



      setError(

        err.response?.data?.message ||

        "Email ou mot de passe incorrect"

      );


    } finally {

      setLoading(false);

    }


  }



  return (

    <div className="login-page">


      <div className="login-card">


        <h1>
          🤖 CareerAI Assistant
        </h1>


        <p className="login-subtitle">

          Connectez-vous à votre espace

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

              placeholder="votre@email.com"

              value={email}

              onChange={
                (e) =>
                setEmail(e.target.value)
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
                (e) =>
                setPassword(e.target.value)
              }

              required

            />


          </div>




          <button

            type="submit"

            disabled={loading}

            className="login-button"

          >

            {
              loading
              ? "Connexion..."
              : "Se connecter"
            }


          </button>



        </form>



        <p className="register-link">


          Pas encore de compte ?


          <button

            type="button"

            onClick={
              () => navigate("/register")
            }

          >

            Créer un compte

          </button>


        </p>



      </div>


    </div>

  );

}