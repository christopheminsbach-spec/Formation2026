import {
useState
} from "react";


import {
login
} from "../services/authService";


import {
useNavigate
} from "react-router-dom";



export default function Login(){


const navigate =
useNavigate();



const [email,setEmail]
=
useState("");

const [password,setPassword]
=
useState("");



async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


try{


const data =
await login({

email,

password

});



localStorage.setItem(

"access_token",

data.access_token

);



navigate(
"/dashboard"
);



}

catch(error){

console.error(
"Erreur connexion",
error
);

}


}



return (

<div className="login">


<h1>
CareerAI Assistant
</h1>


<form
onSubmit={handleSubmit}
>


<input

type="email"

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>



<input

type="password"

placeholder="Mot de passe"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button>

Connexion

</button>


</form>


</div>

);


}