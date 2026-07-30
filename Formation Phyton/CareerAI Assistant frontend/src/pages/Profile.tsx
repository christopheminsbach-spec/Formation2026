import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";


interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  is_active: boolean;
}


export default function Profile() {

  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {

    const token =
      localStorage.getItem("access_token");

    const storedUser =
      localStorage.getItem("user");


    if (!token || !storedUser) {

      navigate("/login");

      return;
    }


    try {

      const userData =
        JSON.parse(storedUser);

      setUser(userData);


    } catch(error) {

      console.error(
        "Erreur lecture utilisateur",
        error
      );

      navigate("/login");

    }


  }, [navigate]);



  const logout = () => {

    localStorage.removeItem(
      "access_token"
    );

    localStorage.removeItem(
      "user"
    );


    navigate("/login");

  };



  if (!user) {

    return (

      <div className="profile-loading">

        Chargement du profil...

      </div>

    );

  }



  return (

    <div className="profile-page">


      <div className="profile-card">


        <div className="profile-header">


          <div className="profile-avatar">

            {
              user.first_name
                .charAt(0)
                .toUpperCase()
            }

          </div>


          <div>

            <h1>
              Mon profil
            </h1>


            <p>
              CareerAI Assistant
            </p>


          </div>


        </div>



        <div className="profile-info">


          <div className="info-item">

            <span>
              Prénom
            </span>

            <strong>
              {user.first_name}
            </strong>

          </div>



          <div className="info-item">

            <span>
              Nom
            </span>

            <strong>
              {user.last_name}
            </strong>

          </div>



          <div className="info-item">

            <span>
              Email
            </span>

            <strong>
              {user.email}
            </strong>

          </div>



          <div className="info-item">

            <span>
              Rôle
            </span>

            <strong>
              {user.role}
            </strong>

          </div>



          <div className="info-item">

            <span>
              Statut
            </span>


            <strong
              className={
                user.is_active
                ? "active"
                : "inactive"
              }
            >

              {
                user.is_active
                ? "Compte actif"
                : "Compte désactivé"
              }


            </strong>


          </div>


        </div>



        <div className="profile-actions">


          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >

            ← Retour Dashboard

          </button>



          <button
            className="logout-button"
            onClick={logout}
          >

            Déconnexion

          </button>


        </div>


      </div>


    </div>

  );

}