import "./Jobcard.css"
function Jobcard({job}) {
    return(
<div className="containerjob">
<div className="location">Location: {job.location}</div>
<div className="type">Type: {job.Type}</div>
<div className="salary">Salary: {job.salary}</div>
</div>
    );
}
export default Jobcard
