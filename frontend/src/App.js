import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSchool from "./components/Schools/CreateSchool";
import RegisterStudent from "./pages/RegisterStudent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import RegisterAdmin from "./pages/RegisterAdmin";
import ProtectAdmin from "./utils/ProtectAdmin";
import ProtectUsers from "./utils/ProtectUsers";
import Unauthorized from "./pages/Unauthorized";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          {/* <Header /> */}
          <Routes>
            {/* <Route path='/ProgressWidget' element={<ProgressWidget/>}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/unauthorized" element={<Unauthorized />}></Route>
            <Route path="/registerAdmin" element={<RegisterAdmin />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {/* This routes needs to be protected */}
            <Route element={<ProtectUsers />}>
              <Route path="/dashboard" element={<LandingPage />}></Route>
              <Route path="/createSchool" element={<CreateSchool />}></Route>
              <Route
                path="/registerStudent"
                element={<RegisterStudent />}
              ></Route>
            </Route>
            <Route element={<ProtectAdmin />}>
              <Route path="/adminDashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
          {/* <Footer/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
