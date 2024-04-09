import {AppBar,Grid,Toolbar,Button,Autocomplete,TextField} from "@mui/material"
import { useState } from "react"
import LogInModal from "../components/LoginModal"
import {useNavigate} from "react-router-dom";

 const NavBar = () => {

    const LOCATION=[
        {label:"Chennai",id:1001},
        {label:"Mumbai",id:1002},
        {label:"Delhi",id:1003}
    ]

    const [Modalopen,setModalOpen]=useState(false);
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
  disablePortal
  id="combo-box-demo"
  options={LOCATION}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="LOCATION" />}
/>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={()=>{navigate("/")}}>home</Button>
                    <Button variant="outlined" onClick={()=>{navigate("/booking")}}>book a table</Button>
                    <Button variant="outlined">blog</Button>
                </Grid>
                <Grid item>
                    {username?
                   ( <>
                   <Button variant="outlined" onClick={handleLogOut}>LogOut</Button>
                    
                    </>):
                    (<>
                    <Button variant="outlined" onClick={handlesignupclick}>Sign Up</Button>
                    <Button variant="outlined" onClick={handleloginclick}>LogIn</Button>
                    </>)}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

        <LogInModal Type={Type} Modalopen={Modalopen}  setModalOpen={setModalOpen}/>
    </div>  
  )
}


export default NavBar;