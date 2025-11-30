import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import LoginSignup from "./pages/LoginSignup/LoginSignup.jsx";
import { userContext } from "./components/topbar/Topbar.jsx";
import { PersonContext } from "./pages/LoginSignup/LoginSignup.jsx";
import Jobs from "./pages/jobs/Jobs.jsx"
import Applyform from "./components/Applyform/Applyform.jsx"
import Apply from "./pages/apply/Apply.jsx"
function App() {
  const [action, setAction] = useState("SignUp");
  const [Person, setPerson] = useState(false);

  return (
    <userContext.Provider value={{ action, setAction }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/apply" element={<Apply/>}/>
          <Route path="/form" element={<Applyform/>}/>
        </Routes>
    </userContext.Provider>
  );
}

export default App;
