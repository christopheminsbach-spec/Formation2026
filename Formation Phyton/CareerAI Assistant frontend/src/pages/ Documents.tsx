import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

interface Document {
  name: string;
  type: string;
}

export default function Documents() {

  const [documents, setDocuments] =
    useState<Document[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {

    const loadDocuments = async () => {

      try {

        const response =
          await api.get(
            "/documents/"
          );

        setDocuments(
          response.data.documents
        );

      } catch {

        setError(
          "Impossible de récupérer les documents"
        );

      } finally {

        setLoading(false);

      }
    };

    loadDocuments();

  }, []);


  if (loading) {
    return (
      <p>
        Chargement des documents...
      </p>
    );
  }


  if (error) {
    return <p>{error}</p>;
  }


  return (

    <main>

      <h1>Mes documents</h1>

      {documents.map(
        (document) => (

          <article
            key={document.name}
          >

            <h2>
              {document.name}
            </h2>

            <p>
              Type : {document.type}
            </p>

          </article>

        )
      )}

    </main>
  );
}