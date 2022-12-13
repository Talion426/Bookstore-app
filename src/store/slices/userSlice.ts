import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const initialState: IUser = {
  name: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setName, setEmail, setPassword } = userSlice.actions;
