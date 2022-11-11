import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import LoginInput from "./components/inputs/login/LoginForm";
import RegisterInput from "./components/inputs/login/RegisterForm";
import LoggedInRoutes from "./components/inputs/protectedRoutes/LoggedInRoutes";
import NotLoggedInRoutes from "./components/inputs/protectedRoutes/NotLoggedInRoutes";
import Profile from "./pages/profile";
import MyFriends from "./pages/friends";
import Header from "./components/header";
import HomeModel from "./pages/home/HomeModel";
import Reset from "./components/inputs/login/Reset";
import ConfirmPassword from "./components/inputs/login/ConfirmPassword";
import ValidatingCode from "./components/inputs/login/ValidatingCode";

function App() {
  return (
    <div>
    
      <Routes>
        <Route element ={<LoggedInRoutes/>}>
        <Route path ="/" element={<Home/>} exact/>
        <Route path ="/profile" element ={<Profile/>}exact/>
        <Route path ="/friends" element ={<MyFriends/>}exact/>
        <Route path="/friends:type" element={<MyFriends/>}exact/>
        <Route path ="/profile/:name" element={<HomeModel/>} exact/>
        </Route>
        <Route element={<NotLoggedInRoutes/>}>
        <Route path="/login" element={<LoginInput />} exact/>
        <Route path="/signup" element={<RegisterInput />} exact/>
        <Route path="/reset" element ={<Reset/>} exact/>
        <Route path="/validatingCode" element ={<ValidatingCode/>} exact/>
        <Route path="/confirmPassword" element ={<ConfirmPassword/>} exact/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
