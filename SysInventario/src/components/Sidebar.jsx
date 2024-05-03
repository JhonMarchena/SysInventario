import { Link } from "react-router-dom"
import '../styles/Sidebar.css'
import 'boxicons'

export function Sidebar() {

    return(
        
        <aside className="sidebar">
            <h1>InvSys</h1>
            
            <Link>
                <boxi-con type="solid" name="dashboard"></boxi-con>
                <p>Dashboard</p>
            </Link>


        </aside>
    )

}