import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";


export default function Dashboard() {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        async function loadDashboard() {

            try {

                const result = await getDashboard();

                setData(result);

            } catch (error) {

                console.error(error);

                setError(
                    "Impossible de charger le Dashboard."
                );

            } finally {

                setLoading(false);

            }
        }


        loadDashboard();

    }, []);


    if (loading) {
        return <div>Chargement Dashboard...</div>;
    }


    if (error) {
        return <div>{error}</div>;
    }


    return (
        <main>

            <h1>CareerAI Assistant</h1>

            <h2>Dashboard CDA IA</h2>

            <div>

                <p>
                    Candidatures :
                    {data.stats.applications}
                </p>

                <p>
                    Entretiens :
                    {data.stats.interviews}
                </p>

                <p>
                    Documents :
                    {data.stats.documents}
                </p>

                <p>
                    Matching IA :
                    {data.stats.matches}
                </p>

            </div>

        </main>
    );
}