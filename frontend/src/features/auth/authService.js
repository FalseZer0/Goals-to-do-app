//http requests sending data to the server
import axios from "axios";
const API_URL = '/api/users/' 

//register user 
const register = async (userData) =>{
    const response = await axios.post(API_URL,userData);
    //check if we have data in the response (that also includes token)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

//login user 
const login = async (userData) =>{
    const response = await axios.post(API_URL+'login',userData);
    //check if we have data in the response (that also includes token)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}



//logout user
const logout = async (userData) =>{
    localStorage.removeItem('user')
}
const authService = {
    register,
    logout,
    login
}
export default authService;