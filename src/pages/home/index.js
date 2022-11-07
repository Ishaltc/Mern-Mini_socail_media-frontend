import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from "../../components/header";
import { addFriend, getAllUsers } from "../../components/functions/user";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeModel from "./HomeModel";
import "./style.css"
import { Link } from "react-router-dom";
export default function Home() {
const {user} =useSelector((state)=>({...state}))


const [modalOpen, setModalOpen] = useState(false);
const [allUsers,setAllUsers] = useState([])

  useEffect(() => {
   getData()
  }, [user])
  

const getData = async()=>{
    const data = await getAllUsers(user.token)
    setAllUsers(data.data)
}

//console.log(allUsers);

const addFriendFun = async(id)=>{
    await addFriend(id ,user.token)

}



    return (
        <>
        <Header/>
        {modalOpen&&   <HomeModel setOpenModal={setModalOpen} />}
        <div>
            
        </div>
        <h2 style={{display:"flex",justifyContent:"center"}} >All Users</h2>
         <Grid container spacing={3} pt={5} pl={3} pr={3}>

            {allUsers && allUsers.map((item,i)=>(
                 
                <Grid item xs={3} md={2}>
<Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        style={{objectFit:"cover"}}
        image={item?.picture}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Place: {item.place}
          <br/>
          City: {item.city}
          <br/>
          State:{item.state}
          <br/>
          Country:{item.country}
        </Typography>
      </CardContent>
      <CardActions>

 {/* <Button variant="contained" size="small" onClick={()=>addFriendFun(user._id)}>Add Friend</Button> */}

 <Link to={`/profile/${item.name}`} style={{textDecoration:"none"}}>
       <Button size="small"  
        
        >See More</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>

            
            ))}


         </Grid>
         <div>
        
         </div>

        

        </>
      );
    }