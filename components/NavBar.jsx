import {AppBar,Grid,Toolbar,Button,Autocomplete,TextField} from "@mui/material"
import { useState } from "react"
import LogInModal from "../components/LoginModal"
import {useNavigate} from "react-router-dom";
import {LOCATION} from "../src/Utils"
import { SearchBox } from "./SearchBox";
import { BookedModal } from "./BookedModal";
import SnackBar from "./SnackBar";


 const NavBar = ({pageType=1,setSnackBar,snackBarState}) => {
  


    const [Modalopen,setModalOpen]=useState(false);
    const [bookedModalopen,setbookedModalOpen]=useState(false);
    const [Type,setType]=useState("login");

    
 


    const username= localStorage.getItem("username");
    const navigate=useNavigate();

  const  handleloginclick=()=>{
    setModalOpen(true),
    setType("login")
  }

  const  handlesignupclick=()=>{
    setModalOpen(true),
    setType("registration")
  }


  const handleLogOut=()=>{
    localStorage.setItem("username","");
    window.location.reload();
  }

  const handleBookedTable=()=>{
    setbookedModalOpen(true);
  };
  return (
    <div>
        <AppBar color="transparent" position="static">
            <Toolbar>
                <Grid container
                style={{
                    width:1110,
                    margin:"0 auto"
                }} 
                flexDirection={"row"}
                 justifyContent={"space-around"}
                 alignItems={"center"}>
                <Grid item>
                    <img src="https://media.swipepages.com/2023/6/5fcde7acf64f9100108c719e/guvi-logo-3.svg"/>
                </Grid>
                <Grid item>
                <Autocomplete
                  onChange={e=>{
                    navigate("/booking/"+e.target.innerText.toLowerCase())
                  }}
                  disablePortal
                  id="combo-box-demo"
                  options={LOCATION}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="LOCATION" />}
/>
                </Grid>
                <Grid item>
                    {pageType==1?<>
                   {username?.length && ( <Button   color="success" variant="contained"  onClick={handleBookedTable}>Booked History</Button>)}
                    <Button style={{marginLeft:20}} color="success" variant="contained" onClick={()=>{navigate("/booking")}}>book a table</Button>
                    </>:<SearchBox/>}
                </Grid> 
                <Grid item>
                    {username?
                   ( <>
                   <Button color="warning" variant="contained" onClick={handleLogOut}>LogOut</Button>
                    
                    </>):
                    (<>
                    <Button  color="success" variant="contained" onClick={handlesignupclick}>Sign Up</Button>
                    <Button style={{marginLeft:20}}   color="success" variant="contained" onClick={handleloginclick}>LogIn</Button>
                    </>)}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

        <LogInModal Type={Type} Modalopen={Modalopen}  setModalOpen={setModalOpen}/>
        <BookedModal setSnackBar={setSnackBar} bookedModalopen={bookedModalopen} handleClose={()=> setbookedModalOpen(false)} username={username}/>
        {/* <SnackBar {...snackBarState} setOpenSnackbar={()=>setSnackBar({...snackBarState,openSnackbar:false})}/> */}

    </div>  
  )
}


export default NavBar;