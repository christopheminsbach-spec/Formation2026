import Navbar from "../components/Navbar";
import BackHome from "../components/BackHome";

export default function Home() {

  return (

    <div>

      <Navbar />

      <section className="hero">

        <div>

          <h1>
            Christophe Minsbach
          </h1>

          <h2>
            Futur Concepteur Développeur d'Applications IA
          </h2>

          <p>
            De technicien de maintenance à développeur web,
            je construis aujourd'hui des solutions numériques
            intelligentes.
          </p>

          <button>
            Préparer mon entretien
          </button>

          <BackHome />

        </div>

        <div className="card">

          <h3>
            Mon parcours
          </h3>

          <p>1986 → Formation technique</p>

          <p>2002 → Technicien ENGIE Home Services</p>

          <p>2025 → Développeur Web et Web Mobile</p>

          <p>2026 → Concepteur Développeur d'Applications IA</p>

        </div>

      </section>

    </div>

  );

}