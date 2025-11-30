import "./LoginSignup.css";
import { useContext, useState, createContext } from "react";
import { userContext } from "../../components/topbar/Topbar.jsx";
import { useNavigate } from "react-router-dom";
import AuthStore from "../../useStore/store.jsx"
export const PersonContext=createContext()
function LoginSignup() {
  const { action,setAction} = useContext(userContext);
  const navigate = useNavigate();
  const {person,setPerson}=AuthStore()
  // Temporary user list (not persistent)
  const Users = [
    { Name: "Kwizera", Email: "mervinkwizera@gmail.com", Password: "123456" },
    {Name:"Samuel",Email:"samuel@gmail.com",Password:"123"}
  ];
//Context Management
  
  // Form state
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // Create account logic
  const createAccount = () => {
    if (!Name || !Email || !Password) {
      alert("Failed to Create Account");
    } else {
      const newUser = { Name, Email, Password };
      Users.push([...Users,newUser]);
      alert("Account has been successfully created!");
      navigate("/")
    }
  };

  // Login verification logic
const verify = () => {
const found=false
for (let i=0;i<Users.length;i++) {
    if (Users[i].Email==Email&&Users[i].Password==Password) {
        alert("You have successfully logged in")
        navigate("/")
        setPerson(true)
        found=true
        break
    }
}
if(!found) {
    console.log("Enter the correct credentials");
}
  };

  // Toggle actions

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="outline"></div>
        </div>

        <div className="inputs">
          {action === "SignUp" && (
            <div className="input">
              <input
                type="text"
                placeholder="Names"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click here</span>
          </div>
        )}
        <div className="submit-container">
          {action === "SignUp" && (
            <div className="submit" onClick={createAccount}>
              SignUp
            </div>
          )}
          {action === "Login" && (
            <div className="submit" onClick={verify}>
              Login
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
