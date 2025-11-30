import Jobcard from "../../components/Jobcard/Jobcard.jsx"
import {useState} from "react"
import "./Jobs.css"
function Jobs() {
    const jobs=[{id:1,location:"London",Type:"Full Time",salary:"200000$"},{id:2,location:"Toronto",Type:"Part Time",salary:"30000$"},{id:3,location:"New York",Type:"Full Time",salary:"300000$"}
        ,{id:4,location:"Washington D.C",Type:"Part Time",salary:"150000$"},{id:5,location:"Cairo",Type:"Part Time",salary:"18000$"}
    ]
    const [jobsearch,setJobsearch]=useState("")
    const [search,setSearch]=useState(false)
    const filteredjobs=jobs.filter((job)=>(job.location.toLowerCase().startsWith(jobsearch.toLowerCase())))
    return (
<>
<div className="title">
    SOFTWARE ENGINEERING THAT ARE CURRENTLY AVAILABLE
</div>
<div className="searchbox">
    <input type="txt" placeholder="Search For Job" onChange={(event)=>{setJobsearch(event.target.value)}}/>
    <button onClick={()=>{setSearch(true)}}>SEARCH</button>
</div>
<div className="containerjobs">
{search?filteredjobs.map((job)=>(<Jobcard job={job} key={job.id}/>)):jobs.map((job)=>(<Jobcard job={job} key={job.id}/>))}
</div>
</>
    );
}
export default Jobs
