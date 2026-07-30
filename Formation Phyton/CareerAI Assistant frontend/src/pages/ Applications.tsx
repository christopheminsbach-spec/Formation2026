import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";


import {
  getApplications,
  createApplication,
  updateApplicationStatus
} from "../services/applicationService";

import type {
  Application
} from "../services/applicationService";


import "./Applications.css";



export default function Applications(){

const navigate = useNavigate();


const [applications,setApplications]
=
useState<Application[]>([]);


const [company,setCompany]
=
useState("");


const [position,setPosition]
=
useState("");


const [loading,setLoading]
=
useState(true);



async function loadApplications(){

try{

const data =
await getApplications();

setApplications(data);


}catch(error){

console.error(
"Erreur chargement candidatures",
error
);


}finally{

setLoading(false);

}

}



useEffect(()=>{

loadApplications();

},[]);



async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


if(!company || !position)
return;


try{

await createApplication({

company,

position

});


setCompany("");

setPosition("");


loadApplications();


}catch(error){

console.error(
"Erreur création",
error
);

}

}




async function changeStatus(
id:number,
status:string
){

try{

await updateApplicationStatus(
id,
status
);


loadApplications();


}catch(error){

console.error(
"Erreur statut",
error
);

}

}



return (

<div className="applications-page">


<button
className="back-button"
onClick={() =>
navigate("/dashboard")
}
>
← Retour au Dashboard
</button>



<h1>
Mes candidatures
</h1>



<section className="application-form">


<h2>
Ajouter une candidature
</h2>


<form
onSubmit={handleSubmit}
>


<input

type="text"

placeholder="Entreprise"

value={company}

onChange={
e=>setCompany(e.target.value)
}

/>



<input

type="text"

placeholder="Poste recherché"

value={position}

onChange={
e=>setPosition(e.target.value)
}

/>



<button
type="submit"
>
Ajouter
</button>


</form>


</section>




<section className="application-list">


<h2>
Mes opportunités
</h2>



{
loading ?

<p>
Chargement...
</p>


:

applications.length === 0 ?

<p>
Aucune candidature.
</p>


:

applications.map(app=>(


<div
className="application-card"
key={app.id}
>


<div>

<h3>
{app.position}
</h3>


<p>
{app.company}
</p>


</div>



<select

value={app.status}

onChange={
e =>
changeStatus(
app.id,
e.target.value
)
}

>


<option>
Envoyée
</option>

<option>
Entretien
</option>

<option>
Refusée
</option>

<option>
Acceptée
</option>


</select>


</div>


))


}


</section>


</div>

);

}