import axios from "axios";


const localApi="http://localhost:4000";

const proApi="https://restaurant-demo-node-9oqh.onrender.com";

const apiUrl=import.meta.env.REACT_APP_ENV==='production'? proApi:localApi;

export const handleLoginApi = ({
    username="",
    password="",
}) => { 
  return axios.post(apiUrl+"/login",{
    username,
    password,
  })
}
export const handleRegistrationApi = ({
    username="",
    password="",
    phonenumber="",
    email="",
}) => { 
    return axios.post(apiUrl+"/registration",{
        username,
        password,
        phonenumber,
        email,
    })
  }
  
  export const handleCreateBookingApi = ({
    restaurantId="",
selectedDate="",
selectedSeat=0,
selectedTime="",
username="",
}) => { 
    return axios.post(apiUrl+"/createbooking",{
      restaurantId,
      selectedDate,
      selectedSeat,
      selectedTime,
      username,
    })
  }


  export const handleRestaurantSlotApi= ({
    restaurantId="",
    selectedDate="",
  })=>{
    return axios.post(apiUrl+"/restaurant-slot",{
      restaurantId,
      selectedDate,
    });

  };

  export const fetchBookingForUserApi= ({
  username
  })=>{
    return axios.get(apiUrl+"/fetchBookingForUser/"+username);

  };


  export const makeCancelRequestApi= ({
    bookingId
    })=>{
      return axios.get(apiUrl+"/cancel-booking/"+bookingId);
  
    };