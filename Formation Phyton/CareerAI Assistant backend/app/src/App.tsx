import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


// Pages futures
// import Profile from "./pages/Profile";
// import Jobs from "./pages/Jobs";
// import AdminDashboard from "./pages/admin/AdminDashboard";



function ProtectedRoute(
  {
    children
  }: 
  {
    children: React.ReactNode
  }
) {


  const token =
    localStorage.getItem(
      "access_token"
    );


  if (!token) {

    return (

      <Navigate

        to="/login"

        replace

      />

    );

  }


  return children;

}




function App() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Route racine */}

        <Route

          path="/"

          element={

            <Navigate

              to="/dashboard"

              replace

            />

          }

        />



        {/* Authentification */}

        <Route

          path="/login"

          element={

            <Login />

          }

        />



        {/* Dashboard sécurisé JWT */}

        <Route

          path="/dashboard"

          element={


            <ProtectedRoute>


              <Dashboard />


            </ProtectedRoute>


          }

        />



        {/* Profil candidat futur */}

        {/*
        <Route

          path="/profile"

          element={

            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>

          }

        />
        */}



        {/* Offres emploi futur */}

        {/*
        <Route

          path="/jobs"

          element={

            <ProtectedRoute>

              <Jobs />

            </ProtectedRoute>

          }

        />
        */}



        {/* Administration futur */}

        {/*
        <Route

          path="/admin"

          element={

            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>

          }

        />
        */}



        {/* Toute URL inconnue */}

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