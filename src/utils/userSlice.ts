import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  uid: "",
  name: "",
  email: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.uid = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
