import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
// @ts-ignore
import "../styles/Auth.css";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: FormEvent
    ) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (
            !formData.firstname ||
            !formData.lastname ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        if (formData.password.length < 6) {
            setError(
                "Le mot de passe doit contenir au moins 6 caractères."
            );
            return;
        }

        if (
            formData.password !== formData.confirmPassword
        ) {
            setError(
                "Les mots de passe ne correspondent pas."
            );
            return;
        }

        try {
            setLoading(true);

            await (authService as any).register({
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
            });

            setSuccess(
                "Compte créé avec succès."
            );

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (err: any) {
            setError(
                err.response?.data?.message ||
                    "Impossible de créer le compte."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">

                <h1>CareerAI Assistant</h1>

                <h2>Créer un compte</h2>

                <p className="subtitle">
                    Rejoignez votre assistant intelligent
                    pour la recherche d'emploi.
                </p>

                {error && (
                    <div className="alert error">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="alert success">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="firstname"
                        placeholder="Prénom"
                        value={formData.firstname}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="lastname"
                        placeholder="Nom"
                        value={formData.lastname}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse e-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmer le mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Création..."
                            : "Créer mon compte"}
                    </button>

                </form>

                <div className="auth-footer">

                    <span>
                        Vous avez déjà un compte ?
                    </span>

                    <Link to="/login">
                        Se connecter
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Register;