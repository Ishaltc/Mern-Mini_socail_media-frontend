import { Navigate, Outlet } from "react-router-dom"
import Login from "../../../pages/login"
import { useSelector } from "react-redux"
 
 
 export default function LoggedInRoutes() {
  const {user} = useSelector ((state)=>({...state}))
  return user ?  <Outlet/> :<Navigate to="/login" />

 }
 