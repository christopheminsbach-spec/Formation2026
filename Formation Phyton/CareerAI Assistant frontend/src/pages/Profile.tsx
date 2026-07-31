import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProfile } from "../services/profileService";

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


const [user,setUser]=
useState<User|null>(null);



useEffect(()=>{


async function loadProfile(){


try{


const data =
await getProfile();


setUser(data.user);


}

catch(error){


console.error(error);


navigate("/login");


}


}


loadProfile();



},[navigate]);




function logout(){


localStorage.removeItem(
"access_token"
);


localStorage.removeItem(
"user"
);


navigate("/login");


}




if(!user){


return (

<div>

Chargement profil...

</div>

)

}



return (

<div className="profile-page">


<div className="profile-card">


<div className="avatar">

{
user.first_name
.charAt(0)
.toUpperCase()
}

</div>



<h1>

{user.first_name}
{" "}
{user.last_name}

</h1>


<p>

{user.email}

</p>



<p>

Rôle :
<strong>
{" "}
{user.role}
</strong>

</p>




<button

onClick={logout}

>

Déconnexion

</button>



</div>


</div>


)



}