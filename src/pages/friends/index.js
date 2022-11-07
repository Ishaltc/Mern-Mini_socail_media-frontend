import PeopleIcon from "@mui/icons-material/People";
import Header from "../../components/header";
import AddHomeIcon from "@mui/icons-material/AddHome";
import "./style.css";
import { useSelector } from "react-redux";
import { getFriendsPageInfos } from "../../components/functions/user";
import { useEffect, useReducer } from "react";
import { friendsPage } from "../../components/functions/reducers";
import {Link} from "react-router-dom"
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
 import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function MyFriends() {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loading, error, data }, dispatch] = useReducer(friendsPage, {
    loading: false,
    data: {},
    error: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch({ type: "FRIENDS_REQUEST" });
    const data = await getFriendsPageInfos(user.token);
    if (data.status === "ok") {
      dispatch({ type: "FRIENDS_SUCCESS", payload: data.data });
    } else {
      dispatch({ type: "FRIENDS_ERROR", payload: data.error });
    }
    
  };
 console.log(data)
  return (
    <>
    <Header/>

                
    {data.friends =="" ?(
            <>
           <h2 style={{display:"flex",justifyContent:"center"}} >You don't have friends</h2>
            
            </>
        ):(
            <>
            <h2 style={{display:"flex",justifyContent:"center"}} >My Friends</h2>
            </>
        ) } 
        
         <Grid container spacing={3} pt={5} pl={3} pr={3}>

           {data.friends&& data.friends.map((user)=>(

<Grid item xs={3} md={2}>
<Card sx={{ maxWidth: 345 }}>
  
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        style={{objectFit:"cover"}}
        image={user?.picture}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {user?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         place:{user?.place}
         <br/>
         city: {user?.city}
         <br/>
         state:{user?.state}
         <br/>
         country: {user?.country}
        </Typography>
      </CardContent>
      <CardActions>


 <Link to={`/profile/${user.name}`} style={{textDecoration:"none"}}>
       <Button size="small"  
        
        >See More</Button>
        </Link>
       
      </CardActions>
    </Card>
</Grid>



           ))}
         
            
            


         </Grid>
         </>
         )
         

    {/* <h2 style={{display:"flex",justifyContent:"center"}} >All Users</h2>
         <Grid container spacing={3} pt={5} pl={3} pr={3}>
    {data.friends&& data.friends.map((user)=>(
 <Card  user={user}/>
    ))}
     
    </>
  ); */}
}
