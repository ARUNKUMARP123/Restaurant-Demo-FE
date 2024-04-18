import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchBookingForUserApi,makeCancelRequestApi} from '../src/api';

// import { cancelBooking } from '../../Restaurant-Demo-Node/Services';


export const BookedModal = ({bookedModalopen,handleClose,username,setSnackBar}) => {

    const [BookingHistory,setBookingHistory]=useState([]);

    useEffect(()=>{
        fetchBookingForUserApi({username})
        .then((response)=>{
            response?.data?.length &&
            setBookingHistory(response?.data)})
            .catch((error)=>{console.log(error)});
    },[username])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  return (
    <Modal
    open={bookedModalopen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2" textAlign={'center'} marginBottom={4}>
     My Bookings
      </Typography>
      <BasicTable BookingHistory={BookingHistory} setSnackBar={setSnackBar} handleClose={handleClose  }/>
    </Box>
  </Modal>
  );
}



export default function BasicTable({BookingHistory,setSnackBar,handleClose}) {

    const cancelBooking=async(bookingId)=>{
   const res= await makeCancelRequestApi({bookingId});
   if(res.data==="Cancelled Successfully."){
 setSnackBar({
  type:"error",
    message:" Booking Cancelled.",
    openSnackbar:true,
 });
 handleClose();
   }
       
    }
    return (
      <>
      <TableContainer style={{overflow:''}} component={Paper}>
        <Table sx={{ minWidth: 650,}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Restaurant Name</TableCell>
              <TableCell align="right">Selected Date</TableCell>
              <TableCell align="right">Selected Time</TableCell>
              <TableCell align="right">Selected Seat</TableCell>
              <TableCell align="right">
             
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {BookingHistory.map((row) => (
              <TableRow
                key={row.restaurantId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"> {row.restaurantId}</TableCell>
                <TableCell align="right">{row.selectedDate}</TableCell>
                <TableCell align="right">{row.selectedTime}</TableCell>
                <TableCell align="right">{row.selectedSeat}</TableCell>
                <TableCell align="right">
                <Button variant='outlined' color='error' type='error' onClick={()=>cancelBooking(row._id)}>Cancel</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
           
      </>
      
    );
  }