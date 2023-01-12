import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  password: string;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  email: "",
  password: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.isAuth = true;
    },

    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
