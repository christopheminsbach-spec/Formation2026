import "./app.css";

/**
 * @todo A migrer dans le composant pages/Home.tsx
 * Dès que possible
 */
import "./home.css";

function App() {
  return (
    <div className="wishflix-shell">
      <header
        className="navbar wishflix-shell__navbar"
        aria-label="Navigation principale"
      >
        <div className="navbar-start">
          <a className="wishflix-shell__brand" href="/">
            WishFlix
          </a>
          <span className="wishflix-shell__tagline">Gaming catalog</span>
        </div>

        <nav
          className="navbar-center wishflix-shell__menu"
          aria-label="Liens principaux"
        >
          <a
            className="wishflix-shell__link wishflix-shell__link--active"
            href="/"
          >
            Accueil
          </a>
          <a className="wishflix-shell__link" href="wishlist.html">
            Wishlist
            <span className="badge badge-secondary badge-sm">3</span>
          </a>
        </nav>

        <div className="navbar-end wishflix-shell__user">
          <span className="wishflix-shell__user-label">Invité</span>
          <a className="btn btn-primary btn-sm" href="login.html">
            Se connecter
          </a>
        </div>
      </header>

      <main className="wishflix-main" id="contenu-principal">
        <section className="hero wishflix-hero" aria-labelledby="hero-title">
          <figure className="wishflix-hero__backdrop">
            <img
              src="https://via.assets.so/game.png?id=1&q=95&w=1600&h=900&fit=cover"
              alt="Image de couverture de The Witcher 3"
              width="1600"
              height="900"
            />
          </figure>
          <div className="wishflix-hero__veil" aria-hidden="true"></div>

          <div className="hero-content wishflix-hero__content">
            <div className="wishflix-hero__text">
              <p className="wishflix-hero__kicker">Nouveaute WishFlix</p>
              <div className="wishflix-hero__meta">
                <span className="badge badge-primary">A la une</span>
                <span className="badge badge-ghost">RPG</span>
                <span className="badge badge-outline">PC, PS5, Xbox</span>
              </div>

              <h1 id="hero-title" className="wishflix-hero__title">
                The Witcher 3
              </h1>
              <p className="wishflix-hero__description">
                Incarnez Geralt de Riv, un chasseur de monstres professionnel,
                dans un monde ouvert fantastique rempli de quêtes épiques et de
                choix moraux difficiles.
              </p>
              <p className="wishflix-hero__details">
                2015 | 4.8/5 | 100h de jeu
              </p>

              <div className="wishflix-hero__actions">
                <a className="btn btn-primary btn-lg" href="game-detail.html">
                  Voir la fiche
                </a>
                <button className="btn btn-outline btn-lg">
                  Ajouter a la wishlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="wish-section" aria-labelledby="catalogue-title">
          <header className="wish-section__header">
            <div>
              <h2 className="wish-section__title" id="catalogue-title">
                Catalogue
              </h2>
              <p className="wish-section__subtitle">
                Filtres, navigation et cards dynamiques
              </p>
            </div>
            <div className="wish-section__actions">
              <div className="wish-home__filters">
                <label
                  className="form-control wish-home__search"
                  htmlFor="game-search"
                >
                  <span className="label-text">Rechercher</span>
                  <input
                    id="game-search"
                    type="search"
                    className="input input-bordered"
                    placeholder="Titre ou mot-cle"
                  />
                </label>

                <label className="form-control" htmlFor="game-category">
                  <span className="label-text">Categorie</span>
                  <select id="game-category" className="select select-bordered">
                    <option value="all">Toutes</option>
                    <option value="RPG">RPG</option>
                    <option value="Action">Action</option>
                    <option value="Aventure">Aventure</option>
                  </select>
                </label>

                <button className="btn btn-secondary">
                  Disponibles uniquement
                </button>
              </div>
            </div>
          </header>

          <div className="wish-section__stats">
            <div
              className="stats shadow wish-home__stats"
              role="group"
              aria-label="Statistiques catalogue"
            >
              <div className="stat">
                <div className="stat-title">Jeux disponibles</div>
                <div className="stat-value text-primary">12</div>
              </div>

              <div className="stat">
                <div className="stat-title">Resultats filtres</div>
                <div className="stat-value text-secondary">12</div>
              </div>

              <div className="stat">
                <div className="stat-title">Ma wishlist</div>
                <div className="stat-value text-accent">3</div>
              </div>
            </div>
          </div>

          <div className="wish-section__content">
            <div className="wish-home__grid">
              <article
                className="card movie-card game-card"
                aria-label="Jeu The Witcher 3"
              >
                <figure className="game-card__cover">
                  <img
                    src="https://via.assets.so/game.png?id=1&q=95&w=300&h=450&fit=cover"
                    alt="Affiche de The Witcher 3"
                    width="300"
                    height="450"
                  />
                </figure>

                <div className="card-body game-card__body">
                  <div className="game-card__badges">
                    <span className="badge badge-secondary">RPG</span>
                    <span className="badge badge-success">Disponible</span>
                  </div>

                  <h3 className="card-title game-card__title">The Witcher 3</h3>
                  <p className="game-card__meta">2015 - PC, PS5, Xbox</p>

                  <div className="game-card__rating" aria-label="Note moyenne">
                    <span className="game-card__rating-value">4.8</span>
                    <span className="game-card__rating-max">/5</span>
                  </div>

                  <p className="game-card__synopsis">
                    Incarnez Geralt de Riv, un chasseur de monstres
                    professionnel, dans un monde ouvert fantastique.
                  </p>

                  <div className="card-actions game-card__actions">
                    <a
                      className="btn btn-sm btn-ghost"
                      href="game-detail.html"
                      aria-label="Voir les details de The Witcher 3"
                    >
                      Details
                    </a>
                    <button className="btn btn-sm btn-outline">Wishlist</button>
                  </div>
                </div>
              </article>

              <article
                className="card movie-card game-card"
                aria-label="Jeu Elden Ring"
              >
                <figure className="game-card__cover">
                  <img
                    src="https://via.assets.so/game.png?id=2&q=95&w=300&h=450&fit=cover"
                    alt="Affiche de Elden Ring"
                    width="300"
                    height="450"
                  />
                </figure>

                <div className="card-body game-card__body">
                  <div className="game-card__badges">
                    <span className="badge badge-secondary">Action</span>
                    <span className="badge badge-success">Disponible</span>
                  </div>

                  <h3 className="card-title game-card__title">Elden Ring</h3>
                  <p className="game-card__meta">2022 - PC, PS5, Xbox</p>

                  <div className="game-card__rating" aria-label="Note moyenne">
                    <span className="game-card__rating-value">4.9</span>
                    <span className="game-card__rating-max">/5</span>
                  </div>

                  <p className="game-card__synopsis">
                    Un RPG d'action en monde ouvert développé par FromSoftware
                    et George R.R. Martin.
                  </p>

                  <div className="card-actions game-card__actions">
                    <a className="btn btn-sm btn-ghost" href="game-detail.html">
                      Details
                    </a>
                    <button className="btn btn-sm btn-secondary">
                      Retirer
                    </button>
                  </div>
                </div>
              </article>

              <article
                className="card movie-card game-card"
                aria-label="Jeu Cyberpunk 2077"
              >
                <figure className="game-card__cover">
                  <img
                    src="https://via.assets.so/game.png?id=3&q=95&w=300&h=450&fit=cover"
                    alt="Affiche de Cyberpunk 2077"
                    width="300"
                    height="450"
                  />
                </figure>

                <div className="card-body game-card__body">
                  <div className="game-card__badges">
                    <span className="badge badge-secondary">RPG</span>
                    <span className="badge badge-success">Disponible</span>
                  </div>

                  <h3 className="card-title game-card__title">
                    Cyberpunk 2077
                  </h3>
                  <p className="game-card__meta">2020 - PC, PS5, Xbox</p>

                  <div className="game-card__rating" aria-label="Note moyenne">
                    <span className="game-card__rating-value">4.5</span>
                    <span className="game-card__rating-max">/5</span>
                  </div>

                  <p className="game-card__synopsis">
                    Plongez dans Night City, une mégalopole obsédée par le
                    pouvoir, le glamour et les modifications corporelles.
                  </p>

                  <div className="card-actions game-card__actions">
                    <a className="btn btn-sm btn-ghost" href="game-detail.html">
                      Details
                    </a>
                    <button className="btn btn-sm btn-outline">Wishlist</button>
                  </div>
                </div>
              </article>

              <article
                className="card movie-card game-card"
                aria-label="Jeu Red Dead Redemption 2"
              >
                <figure className="game-card__cover">
                  <img
                    src="https://via.assets.so/game.png?id=4&q=95&w=300&h=450&fit=cover"
                    alt="Affiche de Red Dead Redemption 2"
                    width="300"
                    height="450"
                  />
                </figure>

                <div className="card-body game-card__body">
                  <div className="game-card__badges">
                    <span className="badge badge-secondary">Aventure</span>
                    <span className="badge badge-success">Disponible</span>
                  </div>

                  <h3 className="card-title game-card__title">
                    Red Dead Redemption 2
                  </h3>
                  <p className="game-card__meta">2018 - PC, PS5, Xbox</p>

                  <div className="game-card__rating" aria-label="Note moyenne">
                    <span className="game-card__rating-value">4.7</span>
                    <span className="game-card__rating-max">/5</span>
                  </div>

                  <p className="game-card__synopsis">
                    L'épopée de hors-la-loi Arthur Morgan et de la bande de
                    Dutch van der Linde.
                  </p>

                  <div className="card-actions game-card__actions">
                    <a className="btn btn-sm btn-ghost" href="game-detail.html">
                      Details
                    </a>
                    <button className="btn btn-sm btn-secondary">
                      Retirer
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="wishflix-footer" aria-label="Pied de page">
        <p className="wishflix-footer__text">WishFlix - Gaming Catalog</p>
      </footer>
    </div>
  );
}

export default App;
