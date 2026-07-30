import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import api from "../api/axios";

import "./Profile.css";


interface User {

  id:number;

  first_name:string;

  last_name:string;

  email:string;

  role:string;

}


export default function Profile(){

const navigate = useNavigate();


const [user,setUser] =
useState<User | null>(null);


const [loading,setLoading] =
useState(true);


const [error,setError] =
useState("");



useEffect(()=>{


async function loadProfile(){

try{


const response =
await api.get("/profile/");


setUser(
response.data.user
);


}
catch(error){

console.error(error);

setError(
"Impossible de charger le profil"
);


}
finally{

setLoading(false);

}


}


loadProfile();


},[]);



if(loading){

return (
<h2>
Chargement...
</h2>
);

}



if(error){

return (
<h2>
{error}
</h2>
);

}



return (

<div className="profile-page">


<button
onClick={() => navigate("/dashboard")}
>
← Retour au Dashboard
</button>



<div className="profile-card">


<h1>
Mon profil
</h1>


<div className="avatar">

{
user?.first_name
.charAt(0)
.toUpperCase()
}

</div>



<h2>

{user?.first_name}

{" "}

{user?.last_name}

</h2>



<p>
📧 {user?.email}
</p>



<p>
🎯 Rôle :
{user?.role}
</p>


</div>


</div>

);


}