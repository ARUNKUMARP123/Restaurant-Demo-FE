import { HomePage } from '../components/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import BookingPage from '../components/BookingPage';
import { SnackBarProvider } from '../components/Context';
import SnackBar from '../components/SnackBar';
import { useState } from 'react';


function App() {

  const [snackBarState,setSnackBar]=useState({
    type:"success",
    message:"",
    openSnackbar:false,
  })
  

  return  (
    <SnackBarProvider value={{setSnackBar,snackBarState}}>
 <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/booking/' >
      <Route exact path=':location' element={<BookingPage/>}/>
      <Route index element={<BookingPage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   <SnackBar {...snackBarState} setOpenSnackbar={()=>setSnackBar({...snackBarState,openSnackbar:false})}/>
    </div>
    </SnackBarProvider>
   
  )
}

export default App
