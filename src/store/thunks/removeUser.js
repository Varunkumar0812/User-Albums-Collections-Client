import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("user/remove", async (user) => {
  const response = await axios.delete(
    `https://user-albums-collections.onrender.com/users/${user.id}`
  );

  // FIX !!!!
  return user;
});

export { removeUser };
