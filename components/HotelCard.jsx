import {Grid,Card,CardContent,Typography,CardMedia} from "@mui/material"
import {restaurant} from "../src/Utils"
import { useState } from "react"
import ConfirmBooking from "./ConfirmBooking";


export const HotelCard = ({searchedLocation,setSnackBar,handleClose,snackBarState,checkedFilter,sort }) => {

console.log(sort)
    const [BookingModal,setBookingModal]=useState("");

    let RestaurantData= restaurant[searchedLocation];

    if(checkedFilter?.length){
        RestaurantData=RestaurantData.filter(eachRestaurantData=>{

            let matchFound=true;

            eachRestaurantData.tags.forEach(tag=>{
                if(checkedFilter.includes(tag)){
                    matchFound=false;
                }
            })
            return !matchFound;
        })
    }


    const Callback=(one,two,type,reverse)=>{
const firstRating=Number(one[type]);
const secondRating=Number(two[type]);

if(firstRating>secondRating)return reverse?-1:1;
if(firstRating<secondRating)return reverse?1:-1;
    }


if(sort==="Rating"){
RestaurantData=RestaurantData.sort((a,b)=>Callback(a,b,"ratings"))
}else if(sort==="Price High to Low"){
    RestaurantData=RestaurantData.sort((a,b)=>Callback(a,b,"price",true))
}else if(sort==="Price Low to High"){
    RestaurantData=RestaurantData.sort((a,b)=>Callback(a,b,"price"))
}


  return (
<>
<Grid container lg={12} rowGap={2} >
 {RestaurantData.map((d,index)=>{
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
 <ConfirmBooking setSnackBar={setSnackBar} restaurantId={BookingModal} BookingModal={Boolean(BookingModal)} handleClose={()=>{setBookingModal(false)}}/>

</>


  )
  
}
