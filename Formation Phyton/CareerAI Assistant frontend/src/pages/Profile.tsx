import { useEffect, useState } from "react";
import api from "../api/axios";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  is_active: boolean;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get("/profile/");

        setUser(response.data.user);
      } catch (err: any) {
        console.error(err);

        setError(
          err.response?.data?.message ||
          err.response?.data?.msg ||
          "Impossible de récupérer le profil."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) return <h2>Chargement...</h2>;

  if (error) return <h2>{error}</h2>;

  if (!user) return <h2>Aucun utilisateur.</h2>;

  return (
    <main>
      <h1>Mon profil</h1>

      <p><strong>Prénom :</strong> {user.first_name}</p>

      <p><strong>Nom :</strong> {user.last_name}</p>

      <p><strong>Email :</strong> {user.email}</p>

      <p><strong>Rôle :</strong> {user.role}</p>
    </main>
  );
}