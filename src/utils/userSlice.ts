import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  uid: "",
  name: "",
  email: "",
  photoURL: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.photoURL = "";
      state.uid = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
