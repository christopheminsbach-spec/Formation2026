// Importation des hooks React nécessaires
// useState  → permet de créer et modifier des états
// useRef    → permet de garder une référence persistante entre les rendus
// useEffect → permet d'exécuter du code après le rendu du composant
import { useState, useRef, useEffect } from "react";


// Création du composant Stopwatch
function Stopwatch() {

  // Etat qui contient le nombre de secondes écoulées
  // Au départ : seconds = 0
  // setSeconds permet de modifier cette valeur
  const [seconds, setSeconds] = useState(0);


  // Etat qui indique si le chrono tourne ou non
  // true  → le chrono fonctionne
  // false → le chrono est arrêté
  const [running, setRunning] = useState(true);



  // useRef crée une référence vers l'élément HTML input
  //
  // Au départ :
  // inputRef.current = null
  //
  // Après le rendu :
  // inputRef.current contiendra l'élément <input>
  //
  // Cela permettra de faire :
  // inputRef.current.focus()
  //
  // pour placer automatiquement le curseur dans le champ.
  const inputRef = useRef<HTMLInputElement>(null);



  // Cette référence va stocker l'identifiant du setInterval
  //
  // Exemple :
  //
  // intervalRef.current
  //        |
  //        ↓
  //        12
  //
  // Le nombre 12 représente le timer créé par setInterval.
  //
  // On utilise useRef car cette valeur doit rester disponible
  // entre les différents rendus du composant.
  const intervalRef = useRef<number | null>(null);



  // Fonction qui démarre le chronomètre
  const startTimer = () => {


    // On vérifie qu'il n'existe pas déjà un timer
    //
    // Si intervalRef.current contient déjà une valeur,
    // cela signifie que le chrono tourne déjà.
    //
    // Cela évite de créer plusieurs setInterval en même temps.
    if (intervalRef.current === null) {


      // Création d'un timer qui s'exécute toutes les secondes
      //
      // Toutes les 1000 ms :
      //   → on ajoute 1 à seconds
      //
      intervalRef.current = window.setInterval(() => {


        // prev représente l'ancienne valeur de seconds
        //
        // Exemple :
        // seconds = 5
        //
        // prev = 5
        //
        // résultat :
        // seconds devient 6
        setSeconds((prev) => prev + 1);


      }, 1000);



      // On indique que le chrono est actif
      //
      // Le bouton affichera alors "Arrêter"
      setRunning(true);
    }
  };




  // Fonction qui arrête le chronomètre
  const stopTimer = () => {


    // Vérifie qu'un timer existe
    if (intervalRef.current !== null) {


      // Supprime le timer
      //
      // Le compteur ne sera plus augmenté.
      clearInterval(intervalRef.current);



      // On remet la référence du timer à null
      //
      // Cela signifie :
      // "Il n'y a plus de chrono en fonctionnement"
      intervalRef.current = null;



      // On change l'état du bouton
      //
      // Le bouton affichera maintenant "Reprendre"
      setRunning(false);
    }
  };




  // useEffect s'exécute après le premier affichage du composant
  //
  // Le tableau vide [] signifie :
  //
  // "Exécuter une seule fois au montage"
  //
  useEffect(() => {



    // Donne automatiquement le focus au champ input
    //
    // Le ? signifie :
    // "Exécute focus() seulement si inputRef.current existe"
    //
    inputRef.current?.focus();




    // Lance le chronomètre automatiquement
    //
    // Au chargement de la page :
    //
    // 0 seconde
    // ↓
    // startTimer()
    // ↓
    // 1 seconde
    // ↓
    // 2 secondes
    //
    startTimer();




    // Fonction de nettoyage (cleanup)
    //
    // Elle est exécutée lorsque :
    //
    // - le composant disparaît
    // - React démonte le composant
    //
    // Elle évite qu'un timer continue de fonctionner
    // en arrière-plan.
    return () => {


      // Si un timer existe
      if (intervalRef.current !== null) {


        // On l'arrête
        clearInterval(intervalRef.current);
      }
    };


  }, []);





  // Partie affichée dans la page
  return (
    <div style={{ padding: "20px" }}>


      <h1>
        Chronomètre React
      </h1>




      <input

        // Association entre l'input HTML et notre référence React
        //
        // Maintenant :
        // inputRef.current = cet input
        ref={inputRef}


        type="text"

        placeholder="Votre nom"
      />




      <h2>

        // Affichage dynamique de la valeur seconds
        //
        // React remplace automatiquement :
        //
        // {seconds}
        //
        // par sa valeur actuelle
        //
        Temps : {seconds} seconde(s)

      </h2>





      {
        // Affichage conditionnel
        //
        // Si running est true :
        // afficher le bouton Arrêter
        //
        // Sinon :
        // afficher le bouton Reprendre
        running ? (


          <button onClick={stopTimer}>
            Arrêter
          </button>


        ) : (


          <button onClick={startTimer}>
            Reprendre
          </button>


        )
      }


    </div>
  );
}



// Export du composant pour pouvoir l'utiliser dans main.tsx ou App.tsx
export default Stopwatch;