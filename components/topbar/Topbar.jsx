import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import "./Topbar.css"
import {useState,createContext,useContext} from "react"
import AuthStore from "../../useStore/store.jsx"
import PersonIcon from '@mui/icons-material/Person';
import Profile from "../../components/profile/Profile.jsx"
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "../../components/sidebar/Sidebar.jsx"
export const userContext=createContext() 
function Topbar() {
    const navigate=useNavigate()
    const{action,setAction}=useContext(userContext)
    const handleLogin=()=>{
      navigate("/LoginSignup")
      setAction("Login")
    }
    const{side,setSide}=AuthStore()
    const handleSignup=()=>{
      navigate("/LoginSignup")
      setAction("SignUp")
    }
    const handleSide=()=>{
      setSide(!side);
    }
    const handleLogout = () => {
        setPerson(false); // This will now work correctly
    };
    const{person,setPerson}=AuthStore()
    const{profile,setProfile}=AuthStore()
    return (
      <>
<div className={side?"sides toptopbar__container":"toptopbar__container"}>
<div className="sidebaricon">
<MenuIcon style={{color:"black",fontSize:30}} onClick={handleSide}/>
</div>
<nav className="topbar__container">
  <Link to="/" className="homelinks">Home</Link>
  <Link to="/jobs" className="links">Jobs</Link>
  <div className="authentication">
 {person?(
  <>
  <div className="logout">
    <div className="topbar_submit" onClick={handleLogout}>
    <div>Logout</div>
  </div>
  <div className="icon">
    <PersonIcon onClick={()=>{setProfile(!profile)}}/>
      <div className="iconprofile">
    {profile?<Profile/>:<div></div>}
    </div>
    </div>
    </div>
  </>
 ):(<>
 <div className="topbar__submit" onClick={()=>{handleLogin()}}>Login</div>  
  <div className="topbar__submit"  onClick={()=>{handleSignup()}}>SignUp</div>
  </>
  )
     }

  </div>
</nav>
</div>
 </>
    );
}
export default Topbar
