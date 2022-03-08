import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
//get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    user: user?user:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//register the user 
//deal with async data
export const register = createAsyncThunk('auth/register',
 async (user,thunkAPI)=>{
     try{
        return await authService.register(user);
     }catch(error){
        const message = (error.response && error.response.data && error.response.data.message)||error.message || error.toString();
        //send reject message as a payload
        return thunkAPI.rejectWithValue(message);
     }
 })

// destroy token in the local localStorage
export const logout = createAsyncThunk('auth/logout',async ()=>{
    await authService.logout();
})


//login user

export const login = createAsyncThunk('auth/login',
 async (user,thunkAPI)=>{
     try{
        return await authService.login(user);
     }catch(error){
        const message = (error.response && error.response.data && error.response.data.message)||error.message || error.toString();
        //send reject message as a payload
        return thunkAPI.rejectWithValue(message);
     }
 })

//reducers contains non async operations 
//no idea whats going on here
//extra reducers is for async behavior handling
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(register.pending, (state)=>{
                state.isLoading=true
            })
            .addCase(register.fulfilled, (state,action)=>{
                state.isLoading=false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(register.rejected, (state,action)=>{
                state.isError = true;
                state.isLoading = false;
                state.messasge = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state)=>{
                state.isLoading=true
            })
            .addCase(login.fulfilled, (state,action)=>{
                state.isLoading=false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(login.rejected, (state,action)=>{
                state.isError = true;
                state.isLoading = false;
                state.messasge = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state)=>{
                state.user = null
            })
    },
});
//send reject message as a payload
// return thunkAPI.rejectWithValue(message);
//thats why we pass payload as a message as it already contains an error messasge
export const {reset}  = authSlice.actions;
export default authSlice.reducer