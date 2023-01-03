import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  id: string;
  password: string;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  email: "",
  id: "",
  password: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
    },

    removeUser: (state) => {
      state.name = "";
      state.id = "";
      state.email = "";
      state.password = "";
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
