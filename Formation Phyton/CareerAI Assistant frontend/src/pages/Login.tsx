
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await login({
        email: email.trim().toLowerCase(),
        password,
      });

      console.log("✅ Login réussi");
      console.log("JWT reçu :", Boolean(response.access_token));
      console.log("Utilisateur :", response.user);

      if (!response.access_token) {
        throw new Error("Le serveur n'a retourné aucun JWT.");
      }

      // IMPORTANT :
      // Stockage du JWT AVANT la navigation
      localStorage.setItem(
        "access_token",
        response.access_token
      );

      // Vérification immédiate
      const savedToken =
        localStorage.getItem("access_token");

      console.log(
        "JWT sauvegardé :",
        Boolean(savedToken)
      );

      if (!savedToken) {
        throw new Error(
          "Impossible de sauvegarder le JWT."
        );
      }

      // Navigation uniquement après sauvegarde
      navigate("/dashboard", {
        replace: true,
      });
    } catch (error: any) {
      console.error(
        "❌ Erreur connexion :",
        error.response?.data || error
      );

      setError(
        error.response?.data?.message ||
        error.response?.data?.msg ||
        error.message ||
        "Connexion impossible."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>CareerAI Assistant</h1>

        <h2>Connexion</h2>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Connexion..."
              : "Se connecter"}
          </button>

        </form>

        <p>
          Pas encore de compte ?{" "}
          <Link to="/register">
            Créer un compte
          </Link>
        </p>

      </div>
    </div>
  );
}

