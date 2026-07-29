import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export default function Profile() {

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {

    const loadProfile = async () => {

      try {

        const response =
          await api.get("/auth/me");

        setUser(response.data);

      } catch {

        setError(
          "Impossible de récupérer le profil"
        );

      } finally {

        setLoading(false);

      }
    };

    loadProfile();

  }, []);


  if (loading) {
    return <p>Chargement du profil...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }


  if (!user) {
    return <p>Aucun profil.</p>;
  }


  return (

    <main>

      <h1>Mon profil</h1>

      <p>
        <strong>Prénom :</strong>{" "}
        {user.firstname}
      </p>

      <p>
        <strong>Nom :</strong>{" "}
        {user.lastname}
      </p>

      <p>
        <strong>Email :</strong>{" "}
        {user.email}
      </p>

    </main>
  );
}