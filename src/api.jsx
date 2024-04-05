import axios from "axios";


export const handleLoginApi = ({
    username="",
    password="",
}) => { 
  return (axios.post("http://localhost:4000/login",{
    username,
    password,
  }))
}
export const handleRegistrationApi = ({
    username="",
    password="",
    confirmPassword="",
    phonenumber="",
    email="",
}) => { 
    return (axios.post("http://localhost:4000/registration",{
        username,
        password,
        confirmPassword,
        phonenumber,
        email,
    }))
  }
  
