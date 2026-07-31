import {
    NavLink,
    useNavigate
} from "react-router-dom";

import "./Sidebar.css";


export default function Sidebar(){


const navigate = useNavigate();



function logout(){

    localStorage.removeItem(
        "access_token"
    );

    localStorage.removeItem(
        "user"
    );


    navigate("/login");

}



return (

<aside className="sidebar">


<h2>

🤖 CareerAI

</h2>



<nav>


<NavLink to="/dashboard">

📊 Dashboard

</NavLink>


<NavLink to="/profile">

👤 Profil

</NavLink>


<NavLink to="/applications">

📄 Candidatures

</NavLink>


<NavLink to="/documents">

📁 Documents

</NavLink>


<NavLink to="/matching">

🎯 Matching IA

</NavLink>


<NavLink to="/interview">

💬 Entretien IA

</NavLink>


<NavLink to="/settings">

⚙️ Paramètres

</NavLink>



</nav>



<button
className="logout"
onClick={logout}
>

🚪 Déconnexion

</button>



</aside>


)

}