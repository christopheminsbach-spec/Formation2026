import { useEffect, useState } from "react";

import {
    getDashboard
} from "../services/dashboardService";

import "./Dashboard.css";


interface DashboardData {

    user: {
        first_name:string;
        last_name:string;
    };

    stats: {

        applications:number;
        documents:number;
        matches:number;
        interviews:number;

    };


    profile_completion:number;


    recent_applications:{

        id:number;
        company:string;
        position:string;
        status:string;

    }[];


    recommendations:string[];

}



export default function Dashboard(){


const [data,setData] =
useState<DashboardData | null>(null);



const [loading,setLoading] =
useState(true);



const [error,setError] =
useState("");



useEffect(()=>{


async function load(){


try{


const response =
await getDashboard();


setData(response);


}
catch(error){


console.error(error);


setError(
"Impossible de charger le dashboard"
);


}
finally{


setLoading(false);


}


}



load();


},[]);




if(loading){

return (

<div className="dashboard-loading">

Chargement du Dashboard IA...

</div>

)

}




if(error){

return (

<div className="dashboard-error">

{error}

</div>

)

}




return (

<div className="dashboard-page">



<section className="dashboard-header">


<h1>

Bonjour {data?.user.first_name} 👋

</h1>


<p>

Bienvenue dans votre espace CareerAI Assistant

</p>


</section>





<section className="stats-grid">



<div className="stat-card">

<span>
📄
</span>


<h3>

Candidatures

</h3>


<strong>

{data?.stats.applications}

</strong>


</div>




<div className="stat-card">

<span>
📁
</span>


<h3>

Documents

</h3>


<strong>

{data?.stats.documents}

</strong>


</div>





<div className="stat-card">

<span>
🎯
</span>


<h3>

Matching IA

</h3>


<strong>

{data?.stats.matches}

</strong>


</div>





<div className="stat-card">

<span>
🤖
</span>


<h3>

Entretiens IA

</h3>


<strong>

{data?.stats.interviews}

</strong>


</div>



</section>







<section className="dashboard-columns">





<div className="dashboard-box">


<h2>

🚀 Profil professionnel

</h2>


<div className="progress">


<div

className="progress-bar"

style={{
width:
`${data?.profile_completion}%`
}}

/>


</div>



<p>

Profil complété :
<strong>

{data?.profile_completion}%

</strong>

</p>



</div>






<div className="dashboard-box">


<h2>

🧠 Recommandations IA

</h2>


<ul>

{

data?.recommendations.map(
(item,index)=>(

<li key={index}>

{item}

</li>

)

)

}

</ul>


</div>




</section>







<section className="dashboard-box">


<h2>

📌 Dernières candidatures

</h2>



<table>


<thead>

<tr>

<th>
Entreprise
</th>


<th>
Poste
</th>


<th>
Statut
</th>


</tr>

</thead>




<tbody>


{

data?.recent_applications.map(
(app)=>(

<tr key={app.id}>


<td>

{app.company}

</td>


<td>

{app.position}

</td>


<td>

<span className="status">

{app.status}

</span>

</td>



</tr>


)

)


}



</tbody>


</table>


</section>





</div>

)

}