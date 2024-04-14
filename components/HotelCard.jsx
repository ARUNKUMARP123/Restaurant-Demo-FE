import {Grid,Card,CardContent,Typography,CardMedia} from "@mui/material"
import {restaurant} from "../src/Utils"
import { useState } from "react"
import ConfirmBooking from "./ConfirmBooking";


export const HotelCard = () => {


    const [BookingModal,setBookingModal]=useState("");





  return (
<>
<Grid container lg={12} rowGap={2} >
 { restaurant.chennai.map((d,index)=>{
    return (
    
        <Grid container  key={`${index}-${d.id}`} lg={4} padding={1}  onClick={()=>{setBookingModal(d.id)}}>
            <Grid item>
            <Card sx={{maxWidth:356}}>
        <div style={{position:"relative"}}>
           
            <CardMedia
        component="img"
        height="194"
        image={d.image}
        alt="hotel image"
      />
            <div 
            style={{
                position:"absolute",
                top:0,
                right:0, 
                backgroundColor:"olive",
                width:35,
                height:35,
                }}>
            <Typography color={"white"} textAlign={"center"}>{d.ratings}</Typography>
            </div>
        </div>

       
        <CardContent>
            <Typography>{d.name}</Typography>
            <Typography>{" "} {d.location}</Typography>
            <Typography height={70}>{" "} {d.priceDetail} |{" "} {d.tags.map((e)=>e)} </Typography>
        </CardContent>
    </Card>
            </Grid>
   
   </Grid>
    )
 }) }
 </Grid>
 <ConfirmBooking restaurantId={BookingModal} BookingModal={Boolean(BookingModal)} handleClose={()=>{setBookingModal(false)}}/>

</>


  )
  
}
