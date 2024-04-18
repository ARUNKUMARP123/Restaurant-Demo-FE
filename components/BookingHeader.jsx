import {Grid,Button} from "@mui/material"
import {useNavigate} from 'react-router-dom'
export const BookingHeader = () => {


    const navigate=useNavigate();
  return (
    <Grid container
    flexDirection={"row"}
    justifyContent={"center"}
    alignItems={"center"}
    spacing={4}
    style={{boxShadow:" rgba(0, 0, 0, 0.2) 0px 2px 0px 0px, rgba(0, 0, 0, 0.14) 0px 2px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px"}}
    >
        <Grid item><Button  color="success" variant="text"  type="text" onClick={()=>{navigate("/")}}>Home</Button></Grid>
        <Grid item><Button  color="success" variant="text"  type="text">Book a Table</Button></Grid>
        <Grid item><Button  color="success" variant="text"  type="text">Blog</Button></Grid>
    </Grid>
  )
}
