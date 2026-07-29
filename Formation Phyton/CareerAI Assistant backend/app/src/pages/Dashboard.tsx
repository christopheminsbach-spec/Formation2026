import { useEffect, useState } from "react";
import axios from "axios";

interface DashboardResponse {
message: string;
user_id: string;
}

export default function Dashboard() {
const [data, setData] = useState<DashboardResponse | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const loadDashboard = async () => {
console.log("=== DASHBOARD ===");

  const token = localStorage.getItem("access_token");

  console.log("JWT présent :", !!token);

  if (!token) {
    setError("Aucun token JWT trouvé.");
    setLoading(false);
    return;
  }

  try {
    const response = await axios.get<DashboardResponse>(
      "http://127.0.0.1:5000/api/dashboard/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Dashboard API :", response.data);

    setData(response.data);
  } catch (err: any) {
    console.error("Erreur Dashboard :", err);

    if (err.response?.status === 401) {
      setError("Session expirée. Veuillez vous reconnecter.");
      localStorage.removeItem("access_token");
    } else if (err.response?.status === 422) {
      setError("JWT invalide.");
    } else {
      setError(
        err.response?.data?.msg ||
          err.response?.data?.message ||
          "Impossible de charger le Dashboard."
      );
    }
  } finally {
    setLoading(false);
  }
};

loadDashboard();


}, []);

if (loading) {
return ( <main className="dashboard-page"> <div className="dashboard-card"> <h1>Chargement...</h1> <p>Connexion à CareerAI Assistant.</p> </div> </main>
);
}

if (error) {
return ( <main className="dashboard-page"> <div className="dashboard-card error"> <h1>Erreur Dashboard</h1>


      <p>{error}</p>

      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          window.location.href = "/login";
        }}
      >
        Retour à la connexion
      </button>
    </div>
  </main>
);


}

return ( <main className="dashboard-page"> <div className="dashboard-card"> <h1>CareerAI Assistant</h1>


    <h2>Dashboard</h2>

    <p>
      {data?.message || "Bienvenue sur votre Dashboard."}
    </p>

    <div className="dashboard-info">
      <strong>Utilisateur connecté</strong>

      <span>{data?.user_id}</span>
    </div>

    <button
      onClick={() => {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
      }}
    >
      Déconnexion
    </button>
  </div>
</main>


);
}
