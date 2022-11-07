import Header from "../../components/header";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {useSelector} from "react-redux"
import { Button } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import "./style.css"
import {useState} from "react"
import UpdateProfile from "../../components/profile";
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function Profile() {
    const [modalOpen, setModalOpen] = useState(false);

    const {user} = useSelector ((state)=>({...state}))
   
    
  return (
    <>
   <Header/>
    
    <div style={{paddingTop:"50px"}}>
    <Paper pt={6}
      sx={{
        p: 6,
       
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        
      <Grid container
      
  spacing={0}
  
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '50px' }}>
     {modalOpen &&   <UpdateProfile setOpenModal={setModalOpen}/>}
     <h3>My Profile</h3>
    <div className="image">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           {!modalOpen && <Img alt="complex" src={user?.picture} className ="img"/>} 
            
       
          </ButtonBase>
         
          <div className ="icon" onClick={() => {
            
              setModalOpen(true);
            }} >
            {!modalOpen && <ModeEditIcon  className="edit_icon" /> }
            
          </div> 
        </Grid>
        </div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               <h4>{user?.name}</h4> 
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Place: {user?.place}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                City: {user?.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               State: {user?.state}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Country: {user?.country}
              </Typography>
            </Grid>
            <Grid item>
              {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
           {!modalOpen&& <Button>
                {/* Edit */}
            </Button>}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
    </>
  )
    }
