import "./Bottombar.css"
import {Link} from "react-router-dom"
import AuthStore from "../../useStore/store.jsx"
function Bottombar() {
    const{side,setSide}=AuthStore()
    return (
<>
<div className={side?"sides bottomcontainer":"bottomcontainer"}>
    <div className="commentbox">
        <label>Leave Message:</label>
<textarea rows="5" cols="5" name="comment" maxLength="300"></textarea>
     </div>
    <div className="firstlinks">
<Link to="/" className="link">Home</Link>
<Link to="/jobs" className="link">Jobs</Link>
    </div>
</div>
</>
    );
}
export default Bottombar
