import "./Navbar.css";


export default function Navbar(){


const user =
JSON.parse(
localStorage.getItem("user") || "{}"
);



return (

<header className="navbar">


<div>

CareerAI Assistant

</div>



<div className="navbar-user">


<span>

👤

</span>


<strong>

{
user.first_name || "Utilisateur"
}

</strong>


</div>


</header>


)

}