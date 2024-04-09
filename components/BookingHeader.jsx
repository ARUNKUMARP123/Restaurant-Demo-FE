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
    style={{boxShadow:" rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px"}}
    >
        <Grid item><Button type="text" onClick={()=>{navigate("/")}}>Home</Button></Grid>
        <Grid item><Button type="text">Book a Table</Button></Grid>
        <Grid item><Button type="text">Blog</Button></Grid>
    </Grid>
  )
}
