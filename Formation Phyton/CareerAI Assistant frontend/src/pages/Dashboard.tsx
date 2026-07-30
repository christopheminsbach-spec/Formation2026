import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import api from "../services/api";

import "./Dashboard.css";


interface User {

  id:number;

  first_name:string;

  last_name:string;

  email:string;

  role:string;

  is_active:boolean;

}



export default function Dashboard(){


const navigate = useNavigate();


const [user,setUser] =
useState<User | null>(null);


const [loading,setLoading] =
useState(true);



useEffect(()=>{


async function loadProfile(){

try{


const response =
await api.get("/profile/");


const currentUser =
response.data.user;


setUser(currentUser);



localStorage.setItem(

"user",

JSON.stringify(currentUser)

);



}
catch(error){


console.error(
"Erreur profil :",
error
);



localStorage.removeItem(
"access_token"
);


localStorage.removeItem(
"user"
);



navigate(
"/login",
{
replace:true
}
);



}
finally{

setLoading(false);

}


}



loadProfile();



},[navigate]);





function handleLogout(){


localStorage.removeItem(
"access_token"
);


localStorage.removeItem(
"user"
);



navigate(
"/login",
{
replace:true
}
);



}





if(loading){

return (

<div className="dashboard-loading">

Chargement du Dashboard...

</div>

);


}





return (


<div className="dashboard">



<aside className="dashboard-sidebar">



<div className="dashboard-logo">

🤖 CareerAI

</div>



<nav className="dashboard-menu">


<button
className="nav-item"
onClick={() =>
navigate("/applications")
}
>
📄 Candidatures
</button>



<button
onClick={() =>
navigate("/profile")
}
>

👤 Mon profil

</button>



<button
onClick={() => navigate("/applications")}
>
📄 Candidatures
</button>



<button
onClick={() =>
navigate("/matching")
}
>

🎯 Matching IA

</button>



<button
onClick={() =>
navigate("/interview")
}
>

💬 Entretien IA

</button>



<button
onClick={() =>
navigate("/documents")
}
>

📁 Documents

</button>



</nav>




<button

className="logout-button"

onClick={handleLogout}

>

🚪 Déconnexion

</button>



</aside>





<main className="dashboard-main">



<header className="dashboard-header">



<div>


<p className="dashboard-label">

ESPACE PERSONNEL

</p>



<h1>

Bonjour{" "}

{user?.first_name}

👋

</h1>



<p className="dashboard-subtitle">

Bienvenue dans votre espace CareerAI Assistant.

</p>



</div>




<div

className="header-user"

onClick={() =>
navigate("/profile")
}

>



<div className="user-avatar">

{
user?.first_name
?.charAt(0)
.toUpperCase()
}

</div>




<div className="user-details">


<strong>

{
user?.first_name
}

{" "}

{
user?.last_name
}

</strong>



<span>

{
user?.email
}

</span>



</div>



</div>



</header>




<section className="dashboard-cards">



<div className="dashboard-card">

<h3>

📄 Candidatures

</h3>

<p>

Gérez vos candidatures.

</p>

</div>




<div className="dashboard-card">

<h3>

🎯 Matching IA

</h3>

<p>

Analysez les offres adaptées.

</p>

</div>




<div className="dashboard-card">

<h3>

💬 Entretien IA

</h3>

<p>

Préparez vos entretiens.

</p>

</div>




</section>



</main>




</div>



);


}