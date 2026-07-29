import {
useState
} from "react";

import {
register
} from "../../services/authService";

import Input from "../../components/auth/Input";

import {
useNavigate
} from "react-router-dom";


import "../../styles/Auth.css";



export default function Register(){


const navigate = useNavigate();


const [form,setForm]=useState({

firstname:"",
lastname:"",
email:"",
password:""

});


const [message,setMessage]=useState("");



const handleChange=(e:any)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e:any)=>{

e.preventDefault();


try{


const response = await register(form);


setMessage(
response.message
);


setTimeout(()=>{

navigate("/login");

},1500);



}

catch(error:any){

console.log(error);

setMessage(

error.response?.data?.message
||
error.message
||
"Erreur serveur"

);

}


};



return (

<div className="auth-page">


<form 
className="auth-card"
onSubmit={handleSubmit}
>


<h1>
Créer un compte
</h1>



<Input

type="text"

name="firstname"

placeholder="Prénom"

value={form.firstname}

onChange={(e)=>
handleChange({
...e,
target:{
...e.target,
name:"firstname"
}
})
}

/>



<Input

type="text"

name="lastname"

placeholder="Nom"

value={form.lastname}

onChange={(e)=>
handleChange({
...e,
target:{
...e.target,
name:"lastname"
}
})
}

/>



<Input

type="email"

name="email"

placeholder="Email"

value={form.email}

onChange={(e)=>
handleChange({
...e,
target:{
...e.target,
name:"email"
}
})
}

/>



<Input

type="password"

name="password"

placeholder="Mot de passe"

value={form.password}

onChange={(e)=>
handleChange({
...e,
target:{
...e.target,
name:"password"
}
})
}

/>



<button>

Créer mon compte

</button>



<p>{message}</p>


</form>


</div>

)

}