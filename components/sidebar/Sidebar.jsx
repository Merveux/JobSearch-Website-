import "./Sidebar.css"
import {Link} from "react-router-dom"
function Sidebar() {
    return (
<>
<div className="sidebarcontainer">
<Link to="/" className="sidebarhome">Home</Link>
<Link to="/jobs" className="sidebarjobs">Jobs</Link>
</div>
</>
    )
}
export default Sidebar
