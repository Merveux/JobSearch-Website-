import { SliderMark } from "@mui/material/Slider"
import "./Applyform.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
function Applyform() {
    const[names,setNames]=useState("")
    const[email,setEmail]=useState("")
    const[date,setDate]=useState("")
    const[Field,setField]=useState("")
    const[cv,setCv]=useState(null)
    const[cvName,setCVName]=useState("")
    const navigate=useNavigate()
    const createCandidate=()=>{
        const candidates=[{name:"KWIZERA Samuel",email:"samuel@gmail.com",date:"14 November 2005",field:"Computer Science",cv:AudioBuffer.jpg}]
        if(!names||!email||!date||!Field||!cv) {
            alert("Please Enter Full Details")
        }
        else if(names.length>20) {
            alert("Please Enter Full Name")
        }
        else if(cv.size>4096) {
            alert("Please Upload less than 4MB CV")
        }
        else {
            alert("You Have Successfully Applied!!!")
            candidates.push({names,email,date,Field,cv})
            navigate("/")
        }
        }
    return (
<>
<div className="formcontainer">
<h6>Apply via AkaKazi</h6>
<div className="names">
<input type="txt" placeholder="Names" className="inputapplyform" onChange={(event)=>{setNames(event.target.value)}}/>
</div>
<div className="email">
<input type="email" placeholder="Email" className="inputapplyform" onChange={(event)=>{setEmail(event.target.value)}}/> 
</div>
<div className="date">
<p>Date of Birth:</p>
<input type="date" className="inputapplyform" placeholder="Date of birth" onChange={(event)=>{setDate(event.target.value)}}/>
</div>
<div className="field">
<label>Select Your Field:</label>
<select name="dropdown" onChange={(event)=>{setField(event.target.value)}}>
<option value="Data science">Data Science</option>
<option value="Software Development">Software Development</option>
<option value="Artificial Intelligence">Artificial Intelligence</option>
</select>
</div>
<div className="fileupload">
<label>Your CV:</label>
<input type="file" onChange={(event)=>{const file=event.target.files[0]; if(file)
    {setCv(file)}}}/>
</div>
<div className="submitapply">
<button type="submit" onClick={()=>{createCandidate()}}>APPLY</button>
</div>
</div>
</>
    );
}
export default Applyform
