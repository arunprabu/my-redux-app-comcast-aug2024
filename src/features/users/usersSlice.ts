// core stuff in any slice
/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  status: "idle",
}

// Let's connect to the rest api to add  user
export const addUserAsync = createAsyncThunk(
  "users/addUsersAsync", // action type
  async (formData: any) => {
    console.log("hitting api")
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      formData,
    )
    return response.data;
  }
)

// Let's connect to the rest api to get all users
export const fetchUsersAsync = createAsyncThunk( 
  "users/fetchUsersAsync", // action type
  async () => {
    console.log("hitting api")
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
  }
)

/* What's a slice?
* a function that accepts an initial state, an object of reducer functions, and a slice name
*/

export const usersSlice = createSlice({
  name: "users", // slice name -- is the one in which you will find this feature's data in store
  initialState: initialState, // initial state
  reducers: {
    // if you want to update the store locally w/o connecting to rest api
    // write the logic here
  },
  extraReducers: (builder) => {
    // if you want to connect to the rest api
    // write the logic here
    builder
      .addCase(fetchUsersAsync.pending, state => {
        // if the api request is pending this will be called
        // state is the store data of this feature
        console.log("API CALL IS PENDING")
        state.isLoading = true
        state.isError = false
        state.status = "loading"
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        // if successful  in api call
        // state is the store data of this feature
        console.log("API CALL IS SUCCESSFUL")
        console.log(action)
        state.isLoading = false
        state.isError = false
        state.status = "success"
        state.userList = action.payload // users array from rest api
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => { // if error occurs in api call
        // state is the store data of this feature
        console.log("API CALL HAS ERROR")
        state.isLoading = false
        state.isError = true
        state.status = "Unable to fetch users"
      })
      .addCase(addUserAsync.pending, state => {
        // state is the store data of this feature
        console.log("API CALL IS PENDING")
        state.isLoading = true
        state.isError = false
        state.status = "loading"
      })
      .addCase(addUserAsync.fulfilled, (state: any, action: any) => {
        // state is the store data of this feature
        console.log("API CALL IS SUCCESSFUL")
        console.log(action)
        state.isLoading = false
        state.isError = false
        state.status = "success"
        state.userList = [...state.userList, action.payload] // users array from rest api
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        // state is the store data of this feature
        console.log("API CALL HAS ERROR")
        state.isLoading = false
        state.isError = true
        state.status = "Unable to add user"
      })
  },
});

// export default usersSlice.reducer;