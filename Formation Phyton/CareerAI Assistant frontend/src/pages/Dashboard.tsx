import {
    useEffect,
    useState,
} from "react";

import api from "../api/axios";

import {
    useAuth,
} from "../context/AuthContext";


interface DashboardData {

    applications: number;

    interviews: number;

    skills: number;

    matches: number;
}


export default function Dashboard() {

    const {
        user,
        logout,
    } = useAuth();


    const [
        data,
        setData
    ] = useState<DashboardData | null>(
        null
    );


    const [
        error,
        setError
    ] = useState("");


    useEffect(() => {

        api.get(
            "/api/dashboard/"
        )

        .then((response) => {

            setData(
                response.data
            );

        })

        .catch((error) => {

            console.error(error);

            setError(
                "Impossible de charger le Dashboard."
            );

        });

    }, []);


    if (error) {

        return (
            <div>

                <p>{error}</p>

                <button onClick={logout}>
                    Déconnexion
                </button>

            </div>
        );
    }


    if (!data) {

        return (
            <div className="loading-screen">
                Chargement Dashboard...
            </div>
        );
    }


    return (

        <main className="dashboard">

            <header className="dashboard-header">

                <div>

                    <span>
                        CareerAI Assistant
                    </span>

                    <h1>
                        Bonjour {user?.first_name} 👋
                    </h1>

                    <p>
                        Votre espace professionnel
                        CDA IA
                    </p>

                </div>


                <button
                    onClick={logout}
                >
                    Déconnexion
                </button>

            </header>


            <section className="dashboard-grid">

                <article className="dashboard-card">

                    <span>
                        Candidatures
                    </span>

                    <strong>
                        {data.applications}
                    </strong>

                </article>


                <article className="dashboard-card">

                    <span>
                        Entretiens
                    </span>

                    <strong>
                        {data.interviews}
                    </strong>

                </article>


                <article className="dashboard-card">

                    <span>
                        Compétences
                    </span>

                    <strong>
                        {data.skills}
                    </strong>

                </article>


                <article className="dashboard-card">

                    <span>
                        Matching IA
                    </span>

                    <strong>
                        {data.matches}
                    </strong>

                </article>

            </section>

        </main>
    );
}