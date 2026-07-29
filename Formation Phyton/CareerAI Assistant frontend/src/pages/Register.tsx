
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const API_URL = "http://127.0.0.1:5000/api";

interface RegisterResponse {
  message: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    is_active: boolean;
  };
}

export default function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");

    // --------------------------------------------------
    // Validation frontend
    // --------------------------------------------------

    const cleanFirstname = firstname.trim();
    const cleanLastname = lastname.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (
      !cleanFirstname ||
      !cleanLastname ||
      !cleanEmail ||
      !password ||
      !confirmPassword
    ) {
      setError(
        "Tous les champs sont obligatoires."
      );
      return;
    }

    if (password.length < 6) {
      setError(
        "Le mot de passe doit contenir au moins 6 caractères."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Les mots de passe ne correspondent pas."
      );
      return;
    }

    // --------------------------------------------------
    // Appel Flask
    // --------------------------------------------------

    setLoading(true);

    try {
      const response =
        await axios.post<RegisterResponse>(
          `${API_URL}/auth/register`,
          {
            firstname: cleanFirstname,
            lastname: cleanLastname,
            email: cleanEmail,
            password,
          }
        );

      console.log(
        "✅ Inscription réussie :",
        response.data
      );

      setSuccess(
        "Compte créé avec succès ! Redirection vers la connexion..."
      );

      // Nettoyage
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirection vers Login
      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 1200);
    } catch (error: unknown) {
      console.error(
        "❌ Erreur inscription :",
        error
      );

      if (axios.isAxiosError(error)) {
        const status =
          error.response?.status;

        const message =
          error.response?.data?.message;

        if (status === 409) {
          setError(
            message ||
              "Cette adresse email existe déjà."
          );
        } else if (status === 400) {
          setError(
            message ||
              "Les données envoyées sont invalides."
          );
        } else if (status === 500) {
          setError(
            "Erreur serveur lors de la création du compte."
          );
        } else {
          setError(
            message ||
              "Impossible de créer le compte."
          );
        }
      } else {
        setError(
          "Une erreur inattendue est survenue."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-page">
      <div className="register-card">

        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------ */}

        <header className="register-header">
          <h1>
            CareerAI Assistant
          </h1>

          <h2>
            Créer un compte
          </h2>

          <p>
            Commencez votre parcours professionnel
            avec CareerAI Assistant.
          </p>
        </header>

        {/* ------------------------------------------------
            MESSAGES
        ------------------------------------------------ */}

        {error && (
          <div
            className="register-error"
            role="alert"
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="register-success"
            role="status"
          >
            {success}
          </div>
        )}

        {/* ------------------------------------------------
            FORMULAIRE
        ------------------------------------------------ */}

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {/* Prénom */}

          <div className="form-group">
            <label htmlFor="firstname">
              Prénom
            </label>

            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Votre prénom"
              value={firstname}
              onChange={(e) =>
                setFirstname(e.target.value)
              }
              autoComplete="given-name"
              disabled={loading}
              required
            />
          </div>

          {/* Nom */}

          <div className="form-group">
            <label htmlFor="lastname">
              Nom
            </label>

            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Votre nom"
              value={lastname}
              onChange={(e) =>
                setLastname(e.target.value)
              }
              autoComplete="family-name"
              disabled={loading}
              required
            />
          </div>

          {/* Email */}

          <div className="form-group">
            <label htmlFor="email">
              Adresse email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="email"
              disabled={loading}
              required
            />
          </div>

          {/* Mot de passe */}

          <div className="form-group">
            <label htmlFor="password">
              Mot de passe
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Minimum 6 caractères"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="new-password"
              disabled={loading}
              minLength={6}
              required
            />
          </div>

          {/* Confirmation */}

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirmer le mot de passe
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirmez votre mot de passe"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              autoComplete="new-password"
              disabled={loading}
              minLength={6}
              required
            />
          </div>

          {/* Bouton */}

          <button
            type="submit"
            className="register-button"
            disabled={loading}
          >
            {loading
              ? "Création du compte..."
              : "Créer mon compte"}
          </button>
        </form>

        {/* ------------------------------------------------
            FOOTER
        ------------------------------------------------ */}

        <footer className="register-footer">
          <p>
            Vous avez déjà un compte ?
          </p>

          <Link to="/login">
            Se connecter
          </Link>
        </footer>

      </div>
    </main>
  );
}

