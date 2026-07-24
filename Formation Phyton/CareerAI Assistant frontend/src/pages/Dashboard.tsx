import {
    useEffect,
    useState
} from "react";


import {
    getDashboard
} from "../services/dashboardService";


import type {
    Dashboard
} from "../types/dashboard";



export default function DashboardPage(){


const [data,setData]=useState<Dashboard|null>(null);



useEffect(()=>{


    getDashboard()

    .then(
        result=>setData(result)
    )

    .catch(
        error=>console.error(error)
    );


},[]);



if(!data){

return (

<div>

Chargement Dashboard...

</div>

)

}



return (

<div className="dashboard">


<h1>

Bonjour {data.profile.firstname}

</h1>



<div className="cards">


<div>

<h3>
Compétences
</h3>

<p>
{data.statistics.skills}
</p>

</div>



<div>

<h3>
Candidatures
</h3>

<p>
{data.statistics.applications}
</p>

</div>



<div>

<h3>
Entretiens
</h3>

<p>
{data.statistics.interviews}
</p>

</div>



<div>

<h3>
Documents
</h3>

<p>
{data.statistics.documents}
</p>

</div>


</div>


<h2>
Matching IA
</h2>


{
data.matching.map(
(match)=>(
<div key={match.job_offer_id}>


Score IA :

<strong>
{match.score} %
</strong>


<p>

{match.analysis}

</p>


</div>
)

)

}


</div>

);


}