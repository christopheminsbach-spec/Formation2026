import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDashboard } from "../services/dashboardService";

import "./Dashboard.css";


interface DashboardData {

    user: {
        first_name:string;
        last_name:string;
        email:string;
    };

    applications:number;
    documents:number;
    matches:number;

}



export default function Dashboard(){


const navigate = useNavigate();


const [data,setData] =
useState<DashboardData | null>(null);


const [error,setError] =
useState("");



useEffect(()=>{


async function loadDashboard(){

try{


const result =
await getDashboard();


setData(result);


}
catch(err:any){


console.error(err);


setError(
"Impossible de charger le dashboard"
);


}


}


loadDashboard();


},[]);




if(error){

return (

<div className="dashboard-error">

{error}

</div>

)

}




if(!data){

return (

<div>

Chargement...

</div>

)

}




return (

<div className="dashboard-page">


<div className="dashboard-card">


<h1>

Bonjour {data.user.first_name} 👋

</h1>


<p>

Bienvenue dans CareerAI Assistant

</p>



<div className="dashboard-grid">


<div className="dashboard-box">

<h2>

📄 Candidatures

</h2>


<strong>

{data.applications}

</strong>


</div>



<div className="dashboard-box">

<h2>

📁 Documents

</h2>


<strong>

{data.documents}

</strong>


</div>



<div className="dashboard-box">

<h2>

🤖 Matching IA

</h2>


<strong>

{data.matches}

</strong>


</div>


</div>



<button

onClick={()=>navigate("/profile")}

>

Voir mon profil

</button>


</div>


</div>

)

}