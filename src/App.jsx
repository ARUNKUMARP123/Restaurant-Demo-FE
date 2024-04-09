import { HomePage } from '../components/HomePage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import BookingPage from '../components/BookingPage';


function App() {
  

  return  (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/booking' element={<BookingPage/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
