import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid,Slider,Button} from "@mui/material"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TimePicker from './TimePicker';
import { useEffect, useState } from 'react';
import { handleCreateBookingApi, handleRestaurantSlotApi} from '../src/api';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
//   p: 4,
};


const defaultState={
    restaurantId:"",
    selectedSeat:0,
    selectedDate:"",
    selectedTime:"",
};


export default function ConfirmBooking({BookingModal,handleClose,restaurantId,setSnackBar}) {
const [FormValue,setFormValue]=useState(defaultState);
const [bookedslots,setbookedslots]=useState([]);
const username=localStorage.getItem("username");


useEffect(()=>{
  setbookedslots([])
},[restaurantId,FormValue])


    const handleDateChange=async (value)=>{
      console.log(value,"value");
      const date=new Date(value).getDate();
      const year=new Date(value).getFullYear();
      const month=new Date(value).getMonth()+1;
      const localdate=`${date}-${month}-${year}`;
       setFormValue({
        ...FormValue,
        selectedDate:localdate,
        restaurantId:restaurantId,
       });
      const response=await handleRestaurantSlotApi({
        restaurantId,
        selectedDate:localdate,
      });

      if(response && response.data?.length){
       const bookedslot= response.data.map(ele=>ele.selectedTime);
       setbookedslots(bookedslot);
      }
      console.log(response,"availability")
    };
    const handleSliderChange=(event)=>{
        setFormValue({
            ...FormValue,
            selectedSeat: event.target.value,
        })
    };
    const handleChipClick=(timeslot)=>{
        timeslot
        setFormValue(
           { ...FormValue,
             selectedTime:timeslot,
           })
    };

    const handlebooking= async ()=>{
      console.log("handlebooking",{
        restaurantId,
        username,
        ...FormValue,
      })
     const response=await  handleCreateBookingApi({
        username,
        ...FormValue,
     })
     if(response.data){
      setSnackBar({
        type:"success",
        message:"Booking Created Successfully.",
        openSnackbar:true,
      })
      setFormValue(defaultState);
      setbookedslots([]);
      handleClose();
     }
     console.log(response,"response");
    };
 
    
  return (
    <div>
      <Modal
        open={BookingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>    
          <div style={{width:"100%",backgroundColor:"black"}}>
          <Typography color={'white'} textAlign={'center'} id="modal-modal-title" variant="h6" component="h2">
           Select a Offer or Deal
          </Typography>
          </div>
          <Grid container  alignItems={'center'} justifyContent={'center'} padding={4}>
            <Typography variant='h6' fontWeight={900}>Select Seats</Typography>
          <Box sx={{width:300}}>
          <Slider
          onChange={handleSliderChange}
  aria-label="Temperature"
  defaultValue={0}
  valueLabelDisplay="auto"
  shiftStep={1}
  step={1}
  marks
  min={0}
  max={20}
/>
          </Box>
          <Grid>
          <Typography variant='h6' fontWeight={900}>Booking date</Typography>
          </Grid>
          <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
        <DatePicker views={['year','month','day']} label="" onChange={handleDateChange} disablePast/>
      </DemoContainer>
    </LocalizationProvider>
          </Grid>
          
  <TimePicker handleChipClick={handleChipClick} bookedslots={bookedslots} selectedTime={FormValue.selectedTime}/>

  <Grid item>
<Button onClick={handlebooking}>Create Booking</Button>
  </Grid>
          </Grid>
          
          
        </Box>
      </Modal>
    </div>
  );
}
