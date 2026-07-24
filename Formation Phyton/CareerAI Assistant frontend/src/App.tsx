import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import Dashboard from "./pages/Dashboard";


// Pages prévues
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import Jobs from "./pages/Jobs";
// import AdminDashboard from "./pages/admin/AdminDashboard";



function App() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Page d'accueil */}
        <Route

          path="/"

          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }

        />



        {/* Dashboard utilisateur */}
        <Route

          path="/dashboard"

          element={
            <Dashboard />
          }

        />



        {/* Authentification - préparation */}

        {/*
        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />
        */}



        {/* Profil candidat */}

        {/*
        <Route

          path="/profile"

          element={
            <Profile />
          }

        />
        */}



        {/* Offres emploi */}

        {/*
        <Route

          path="/jobs"

          element={
            <Jobs />
          }

        />
        */}



        {/* Route inconnue */}

        <Route

          path="*"

          element={

            <Navigate

              to="/dashboard"

              replace

            />

          }

        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;