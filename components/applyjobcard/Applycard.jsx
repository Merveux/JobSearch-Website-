import "./Applycard.css"
import {useNavigate} from "react-router-dom"
function Applycard({Job}) {
    const navigate=useNavigate()
    return(
<div className="containerjob">
<div className="location">Location: {Job.location}</div>
<div className="type">Type: {Job.Type}</div>
<div className="salary">Salary: {Job.salary}</div>
<div className="applybutton" onClick={()=>{navigate("/form")}}>APPLY</div>
</div>
    );
}
export default Applycard
