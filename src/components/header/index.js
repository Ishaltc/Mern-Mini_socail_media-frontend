import { Link, useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import "./style.css";
import { Stack } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
      <Link to="/">
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          
          <img className="circle" src="./../icons/icon.jpg" />
          

        </IconButton>
        </Link>
        <Typography
          variant="h6"
          component="div"
          lg={{ flexGrow: 1 }}
          sx={{ p: 5 }}
        ></Typography>
        <Stack direction="row" spacing={10}>
            <Link to="/profile" style={{textDecoration:"none"}}>
          <Button className="btnProfile" color="inherit" style={{color:"white"}} >Profile</Button>
          </Link>
          <Link to="/friends" style={{textDecoration:"none"}}>
          <Button color="inherit" style={{color:"white"}} >Friends</Button>
          </Link>
        </Stack>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Stack>
          <Button
            color="inherit"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
