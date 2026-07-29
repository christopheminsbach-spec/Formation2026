import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

interface Application {
  id: number;
  status: string;
  profile_id: number;
  job_offer_id: number;
}

export default function Applications() {

  const [
    applications,
    setApplications
  ] = useState<Application[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {

    const loadApplications =
      async () => {

        try {

          const response =
            await api.get(
              "/applications/"
            );

          setApplications(
            response.data
          );

        } catch (error: any) {

          setError(
            error.response?.data?.message ||
            "Impossible de récupérer les candidatures"
          );

        } finally {

          setLoading(false);

        }
      };

    loadApplications();

  }, []);


  if (loading) {
    return (
      <p>
        Chargement des candidatures...
      </p>
    );
  }


  if (error) {
    return <p>{error}</p>;
  }


  return (

    <main>

      <h1>Candidatures</h1>

      {applications.length === 0 ? (

        <p>
          Aucune candidature.
        </p>

      ) : (

        <div>

          {applications.map(
            (application) => (

              <article
                key={application.id}
              >

                <h2>
                  Candidature #
                  {application.id}
                </h2>

                <p>
                  Statut :{" "}
                  {application.status}
                </p>

                <p>
                  Offre :{" "}
                  {application.job_offer_id}
                </p>

              </article>

            )
          )}

        </div>

      )}

    </main>
  );
}