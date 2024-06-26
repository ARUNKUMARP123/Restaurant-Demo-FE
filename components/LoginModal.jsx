import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { handleLoginApi, handleRegistrationApi } from '../src/api';


export default function LogInModal({
    Modalopen=false,
     setModalOpen=()=>{},
     handleModalClose=()=>{},
    Type="login",}) {
 
  const [formValue,setformValue]=React.useState({
    username:"",
    password:"",
    confirmPassword:"",
    phonenumber:"",
    email:"",
  });

  const handleUserLogin=(username)=>{
    localStorage.setItem("username",username);
   
  }



  return ( 
    <React.Fragment>
     
      <Dialog
        open={Modalopen}
        onClose={()=>{
            setModalOpen(false);
        }}
        PaperProps={{
          component: 'form',
          onSubmit:async (event) => {
            event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const email = formJson.email;
            // console.log(email);
            if(Type==="login"){
             const response= await handleLoginApi(formValue);
             console.log(response.data,"response");
             if(response.data) handleUserLogin(response.data);
              //alert("login");
            }else{
              const response= await handleRegistrationApi(formValue);
              console.log(response.data,"response");
              if(response.data) handleUserLogin(response.data);
              //alert("registration");
            }
            setModalOpen(false);
          },
        }}
      >
        <DialogTitle>{Type==="login"?"LogIn":"Registration"}</DialogTitle>
        {/*  */}
        <DialogContent style={{width:500}}>
        {/* content for login from */}
       
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="UserName"
            name="UserName"
            label="UserName"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>{
              setformValue({
                ...formValue,username:event.target.value,
              })
            }}
          />
          
       
     
        <TextField
            autoFocus
            required
            margin="dense"
            id="Password"
            name="Password"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setformValue({
                  ...formValue,password:event.target.value,
                })
              }}
          />
          
        
        {/* content for registration from */}
        {Type!="login" &&(<>
        
        <TextField
            autoFocus
            required
            margin="dense"
            id="Password"
            name="comfirmPassword"
            label="ComfirmPassword"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setformValue({
                  ...formValue,confirmPassword:event.target.value,
                })
              }}
          />
          
     
     
        <TextField
            autoFocus
            required
            margin="dense"
            id="phonenumber"
            name="Phonenumber"
            label="Phonenumber"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setformValue({
                  ...formValue,phonenumber:event.target.value,
                })
              }}
          />
           
        
      
        <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="text "
            fullWidth
            variant="standard"
            onChange={(event)=>{
                setformValue({
                  ...formValue,email:event.target.value,
                })
              }}
          />
        </>)} 
        </DialogContent>
        <DialogActions>
          <Button  color="error" variant="contained"  onClick={()=>{ setModalOpen(false);   }}>Cancel</Button>
          <Button   color="success" variant="contained" type="submit">{Type==="login"?"LogIn":"Registration"}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
