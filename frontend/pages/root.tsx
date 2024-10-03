import { Link, Outlet } from "react-router-dom"

export default function Root(){
return(
    <>
    <Link to={'/Login'}>Login</Link>
    <Link to={'/index'}>Register</Link>
    <Outlet />
    </>
)
}