import { Link, Outlet } from "react-router-dom"
import '../src/index.css'
export default function Root(){
return(
    <>
    <div className="Links">
    <Link to={'/Login'}>Login</Link>
    <Link to={'/index'}>Register</Link>
    </div>
    <Outlet />

    </>
)
}