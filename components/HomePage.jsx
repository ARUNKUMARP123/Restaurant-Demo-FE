import { Banner } from "./Banner"
import { BestOffers } from "./BestOffers"
import { SnackBarConsumer } from "./Context"
import NavBar from "./NavBar"


export const HomePage = () => {
  return (
   
   <SnackBarConsumer>
   {({setSnackBar,snackBarState})=>
   ( <>
    <NavBar setSnackBar={setSnackBar} snackBarState={snackBarState}/>
     <Banner/>
   <BestOffers/>
    </>
    )}
   </SnackBarConsumer>
  )
}
