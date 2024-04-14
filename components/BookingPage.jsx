import { BookingHeader } from "./BookingHeader";
import {Grid} from "@mui/material"
import NavBar from "./NavBar";
import Filter from "./Filter";
import { GeoBreadcrumbs } from "./Breadcrumbs";
import { InfoBox } from "./InfoBox";
import { HotelCard } from "./HotelCard";


const BookingPage = () => {
    return (
      <div>
        <NavBar></NavBar>
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
          <GeoBreadcrumbs/>
          <InfoBox/>
          <HotelCard/>
        </Grid>

        </Grid>
      </div>
    )
  }
  
  
  export default BookingPage; 