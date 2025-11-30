import {Link} from "react-router-dom"
import Topbar from "../../components/topbar/Topbar.jsx"
import Centerbar from "../../components/centerbar/Centerbar.jsx"
import "./Home.css"
import {useContext,createContext,useState} from "react"
import {PersonContext} from "../LoginSignup/LoginSignup.jsx"
import Bottombar from "../../components/bottombar/Bottombar.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import AuthStore from "../../useStore/store.jsx"
function Home() {
    const {side,setSide}=AuthStore()
    return (
<>

<div className="Layout">
<div className="leftpart">
{side?<Sidebar/>:null}
</div>
<div>
<Topbar/>
<Centerbar/>
<Bottombar/>
</div>
</div>
</>
    );
}
export default Home
