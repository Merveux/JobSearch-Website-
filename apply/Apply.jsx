import "./Apply.css"
import Applycard from "../../components/applyjobcard/Applycard.jsx"
function Apply() {
   const Jobs=[{id:1,location:"London",Type:"Full Time",salary:"200000$"},{id:2,location:"Toronto",Type:"Part Time",salary:"30000$"},{id:3,location:"New York",Type:"Full Time",salary:"300000$"}
        ,{id:4,location:"Washington D.C",Type:"Part Time",salary:"150000$"},{id:5,location:"Cairo",Type:"Part Time",salary:"18000$"}
    ]
    return (
<>
<div className="applycontainer">
    <div className="titlecontainer">PLEASE APPLY FOR JOB</div>
    <div className="unknown">
{Jobs.map((Job)=>(<Applycard Job={Job} key={Job.id}/>))}
</div>
</div>
</>
    )
}
export default Apply;
