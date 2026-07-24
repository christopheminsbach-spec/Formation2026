import {
useEffect,
useState
} from "react";


import {
getDashboard
} from "../services/dashboardService";



export default function Dashboard(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


getDashboard()

.then(
response=>{

setData(response);

}

)

.catch(
error=>{

console.error(error);


}

);


},[]);



if(!data){

return (

<h2>
Chargement Dashboard...
</h2>

)

}



return (

<div className="dashboard">


<h1>

Bonjour {data.profile.firstname}

</h1>



<div className="cards">


<Card

title="Compétences"

value={
data.statistics.skills
}

/>


<Card

title="Documents"

value={
data.statistics.documents
}

/>


<Card

title="Candidatures"

value={
data.statistics.applications
}

/>


<Card

title="Entretiens"

value={
data.statistics.interviews
}

/>


</div>



<h2>

Matching IA 🤖

</h2>



{
data.matching.map(
(item:any)=>(

<div
key={item.job_offer_id}
className="matching-card"
>


<h3>

Score :
{item.score} %

</h3>


<p>

{item.analysis}

</p>


</div>

)

)

}



</div>

);

}




function Card(
{
title,
value
}:any
){

return (

<div className="card">


<h3>

{title}

</h3>


<p>

{value}

</p>


</div>

)

}