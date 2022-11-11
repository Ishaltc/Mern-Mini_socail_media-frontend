import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ConfirmPassword from "./ConfirmPassword";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Reset() {
    const[show,setShow] = useState(false)
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
const params = {email:email}

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const datas = new FormData(event.currentTarget);
      setLoading(true);

      await axios.post(`${process.env.REACT_APP_API_URL}/findUser`, {
        email,
      });
   navigate ("/validatingCode",{state:{email}})


    } catch (error) {
       
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <input
                  className="input_email"
                  name="email"
                  type="email"
                  required
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />
                {/* <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                
                autoComplete="email"
              /> */}
              </Grid>
            </Grid>
            {error && <div className="error_text">{error}</div>} 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>
            <div className="reset"></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RingLoader
                loading={loading}
                color="#7ecec6"
                size={30}
                className="loader"
              />
            </div>

            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      
    </ThemeProvider>
  
  );
}
