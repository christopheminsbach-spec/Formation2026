import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Dashboard.css";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  is_active: boolean;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get("/profile/");

        const currentUser = response.data.user;

        setUser(currentUser);

        localStorage.setItem(
          "user",
          JSON.stringify(currentUser)
        );
      } catch (error) {
        console.error("Erreur profil :", error);

        localStorage.removeItem("access_token");
        localStorage.removeItem("user");

        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  }

  if (loading) {
    return (
      <div className="dashboard-loading">
        Chargement...
      </div>
    );
  }

  return (
    <div className="dashboard">

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          🤖 CareerAI
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Déconnexion
        </button>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <p className="dashboard-label">
              ESPACE PERSONNEL
            </p>

            <h1>
              Bonjour {user?.first_name} 👋
            </h1>

            <p className="dashboard-subtitle">
              Heureux de vous revoir.
            </p>

          </div>

          <div className="header-user">

            <div className="user-avatar">
              {user?.first_name?.charAt(0).toUpperCase()}
            </div>

            <div className="user-details">

              <strong>
                {user?.first_name} {user?.last_name}
              </strong>

              <span>
                {user?.email}
              </span>

            </div>

          </div>

        </header>

      </main>

    </div>
  );
}