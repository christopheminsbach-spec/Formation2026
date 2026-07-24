import { Link } from "react-router-dom";


export default function Navbar(){

return (

<nav className="navbar">


<h2>
🚀 CareerAI Assistant
</h2>


<div className="menu">


<Link to="/">
🏠 Accueil
</Link>


<Link to="/dashboard">
📊 Dashboard
</Link>


<Link to="/profil">
👤 Profil
</Link>


<Link to="/analyse">
🤖 Analyse IA
</Link>


<Link to="/applications">
📁 Candidatures
</Link>


</div>


</nav>

);

}

