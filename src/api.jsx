import axios from "axios";


export const handleLoginApi = ({
    username="",
    password="",
}) => { 
  return axios.post("http://localhost:4000/login",{
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
    return axios.post("http://localhost:4000/registration",{
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
    return axios.post("http://localhost:4000/createbooking",{
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
    return axios.post("http://localhost:4000/restaurant-slot",{
      restaurantId,
      selectedDate,
    });

  };

  export const fetchBookingForUserApi= ({
  username
  })=>{
    return axios.get("http://localhost:4000/fetchBookingForUser/"+username);

  };


  export const makeCancelRequestApi= ({
    bookingId
    })=>{
      return axios.get("http://localhost:4000/cancel-booking/"+bookingId);
  
    };