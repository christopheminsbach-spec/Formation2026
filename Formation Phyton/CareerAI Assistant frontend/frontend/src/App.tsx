import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AnalyseAI from "./pages/AnalyseAI";
import Applications from "./pages/Applications";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profil"
          element={<Profile />}
        />

        <Route
          path="/analyse"
          element={<AnalyseAI />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;