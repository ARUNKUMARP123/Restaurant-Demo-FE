import { BookingHeader } from "./BookingHeader";
import {Grid} from "@mui/material"
import NavBar from "./NavBar";
import Filter from "./Filter";
import { GeoBreadcrumbs } from "./Breadcrumbs";
import { InfoBox } from "./InfoBox";
import { HotelCard } from "./HotelCard";
import { useParams } from "react-router-dom";
import {SUPPORTED_LOCATION} from "../src/Utils"
import { SnackBarConsumer } from "./Context";

const BookingPage = () => {

  const {location}=useParams();
  console.log(location,"location");
 const searchedLocation =SUPPORTED_LOCATION.includes(location?.toLowerCase())?location:SUPPORTED_LOCATION?.[0]
    return (
      <SnackBarConsumer>
     
     {({setSnackBar,snackBarState})=>{
      return (
        <>
         <NavBar pageType={2}></NavBar>
        <BookingHeader></BookingHeader>
        <Grid container
        style={{
          width:1200,
          margin:"0 auto"
       }}
       spacing={4}
       >
        <Grid item lg={3}>
          <Filter/>
        </Grid>
        <Grid item lg={9}>
          <GeoBreadcrumbs searchedLocation={searchedLocation}/>
          <InfoBox searchedLocation={searchedLocation}/>
          <HotelCard searchedLocation={searchedLocation} setSnackBar={setSnackBar} snackBarState={snackBarState}/>
        </Grid>

        </Grid>
        </>

      )
     }}
     </SnackBarConsumer>
      
    )
  }
  
  
  export default BookingPage; 