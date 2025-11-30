import "./Profile.css"
import PersonIcon from '@mui/icons-material/Person';
import LoginSignup from "../../pages/LoginSignup/LoginSignup.jsx"
import AuthStore from "../../useStore/store.jsx"
function Profile({Users}) {
    const{person,setPerson}=AuthStore()
    return (
<>
<div className="profilecontainer">
<div className="profileimage">
<PersonIcon/>
</div>
<div className="profilecontent">
<div className="person">Personal</div>
<div className="email">mervinkwizera@gmail.com</div>
<div className="profilelogout" onClick={()=>{setPerson(false)}}>Logout</div>
</div>
</div>
</>
    );
}
export default Profile
