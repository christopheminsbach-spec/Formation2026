import { useState, useEffect } from 'react';

// 1.Ajouter un userEffetct qui s'éxecute au montage
// (tableau de dépendances vide)

// 2. A l 'interieur, utiliser setTimeout pour passer
//. show à true aprés 2000ms


// A faire 

// 1. useEffect(() => {...}, [])

//. setTimeout(() => setShow(true), 2000) à l'intérieur
function FlashMessage() {
  const [show, setShow] = useState(false);

    useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
   }, []);
  
  return (
    <div>
      <button type="button" onClick={() => setShow((prev) => !prev)}>
        {show ? 'Masquer' : 'Afficher'}
      </button>
      {show ? <p>chargements terminés</p> : null}
    </div>
  )
}


export default FlashMessage;