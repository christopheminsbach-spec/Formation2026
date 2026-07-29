
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return;
    }

    try {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
    } catch (error) {
      console.error(
        "Impossible de lire les données utilisateur :",
        error
      );
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-logo">
          <span className="logo-icon">🤖</span>
          <span>CareerAI</span>
        </div>

        <nav className="dashboard-nav">

          <button className="nav-item active">
            <span>📊</span>
            <span>Dashboard</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/profile")}
          >
            <span>👤</span>
            <span>Mon profil</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/applications")}
          >
            <span>📄</span>
            <span>Candidatures</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/matching")}
          >
            <span>🎯</span>
            <span>Matching IA</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/interview")}
          >
            <span>💬</span>
            <span>Entretien IA</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/documents")}
          >
            <span>📁</span>
            <span>Documents</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="nav-item"
            onClick={() => navigate("/settings")}
          >
            <span>⚙️</span>
            <span>Paramètres</span>
          </button>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <span>🚪</span>
            <span>Déconnexion</span>
          </button>

        </div>

      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div className="dashboard-header-content">

            <span className="dashboard-label">
              ESPACE PERSONNEL
            </span>

            <h1>
              Bonjour{" "}
              {user?.first_name || "et bienvenue"} 👋
            </h1>

            <p className="dashboard-subtitle">
              Voici un aperçu de votre parcours professionnel.
            </p>

          </div>

          <div className="header-user">

            <div className="user-avatar">
              {user?.first_name
                ?.charAt(0)
                .toUpperCase() || "U"}
            </div>

            <div className="user-details">

              <strong>
                {user
                  ? `${user.first_name} ${user.last_name}`
                  : "Utilisateur"}
              </strong>

              <span>
                {user?.email || "Compte CareerAI"}
              </span>

            </div>

          </div>

        </header>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className="stats-grid">

          <article className="stat-card">

            <div className="stat-icon">
              📨
            </div>

            <div className="stat-content">

              <span className="stat-title">
                Candidatures
              </span>

              <strong>
                0
              </strong>

              <small>
                Aucune candidature
              </small>

            </div>

          </article>

          <article className="stat-card">

            <div className="stat-icon">
              🎯
            </div>

            <div className="stat-content">

              <span className="stat-title">
                Matchings IA
              </span>

              <strong>
                0
              </strong>

              <small>
                Analysez votre profil
              </small>

            </div>

          </article>

          <article className="stat-card">

            <div className="stat-icon">
              📄
            </div>

            <div className="stat-content">

              <span className="stat-title">
                Documents
              </span>

              <strong>
                0
              </strong>

              <small>
                CV et lettres
              </small>

            </div>

          </article>

          <article className="stat-card">

            <div className="stat-icon">
              💬
            </div>

            <div className="stat-content">

              <span className="stat-title">
                Entretiens IA
              </span>

              <strong>
                0
              </strong>

              <small>
                Entraînez-vous
              </small>

            </div>

          </article>

        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <section className="dashboard-content">

          {/* PROFILE */}

          <article className="dashboard-panel profile-panel">

            <div className="panel-header">

              <div>

                <span className="panel-kicker">
                  PROFIL
                </span>

                <h2>
                  Votre profil professionnel
                </h2>

              </div>

              <button
                className="panel-link"
                onClick={() => navigate("/profile")}
              >
                Modifier →
              </button>

            </div>

            <div className="profile-progress">

              <div className="progress-header">

                <span>
                  Profil complété
                </span>

                <strong>
                  20%
                </strong>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-value"
                  style={{ width: "20%" }}
                />

              </div>

              <p>
                Complétez votre profil pour obtenir
                des recommandations plus pertinentes.
              </p>

            </div>

            <button
              className="primary-button"
              onClick={() => navigate("/profile")}
            >
              Compléter mon profil
            </button>

          </article>

          {/* AI */}

          <article className="dashboard-panel ai-panel">

            <div className="ai-icon">
              ✨
            </div>

            <span className="panel-kicker">
              CAREERAI INTELLIGENCE
            </span>

            <h2>
              Analysez votre potentiel professionnel
            </h2>

            <p>
              Notre intelligence artificielle analyse
              votre profil et vous aide à identifier
              les opportunités qui correspondent
              réellement à vos compétences.
            </p>

            <button
              className="primary-button"
              onClick={() => navigate("/matching")}
            >
              Lancer une analyse IA
            </button>

          </article>

        </section>

        {/* =====================================================
            QUICK ACTIONS
        ====================================================== */}

        <section className="quick-section">

          <div className="section-heading">

            <span className="panel-kicker">
              ACTIONS RAPIDES
            </span>

            <h2>
              Que souhaitez-vous faire ?
            </h2>

          </div>

          <div className="quick-grid">

            <button
              className="quick-card"
              onClick={() => navigate("/applications")}
            >

              <span className="quick-icon">
                📨
              </span>

              <div>

                <strong>
                  Ajouter une candidature
                </strong>

                <small>
                  Suivez vos opportunités
                </small>

              </div>

              <b>
                →
              </b>

            </button>

            <button
              className="quick-card"
              onClick={() => navigate("/documents")}
            >

              <span className="quick-icon">
                📄
              </span>

              <div>

                <strong>
                  Créer un CV
                </strong>

                <small>
                  Optimisez votre candidature
                </small>

              </div>

              <b>
                →
              </b>

            </button>

            <button
              className="quick-card"
              onClick={() => navigate("/interview")}
            >

              <span className="quick-icon">
                🎤
              </span>

              <div>

                <strong>
                  Simuler un entretien
                </strong>

                <small>
                  Préparez votre prochain entretien
                </small>

              </div>

              <b>
                →
              </b>

            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

