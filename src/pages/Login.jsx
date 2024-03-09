import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import { login_Account } from "../config/firebase/firebase_methods";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { set_user_auth } from "../store/slices/user_auth_slice";

export const Login = () => {
  const [data, setData] = useState({});
   const navigate =  useNavigate()
   const dispatch = useDispatch()

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  console.log(data);

  const submit_handle = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const user = await signInWithEmailAndPassword(auth,email, password);
      alert('User signed in', user);
      navigate('/');
      dispatch(set_user_auth({auth:true}))
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle login error
    }
  };

  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center">
      <Box
        component="form"
        onSubmit={submit_handle}
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Login
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            label="Email"
            required={true}
            id="email"
            onChange={change_handle}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            label="Password"
            required={true}
            id="password"
            onChange={change_handle}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Login</Custom_Button>
        <div className="text-center">
          Don't have account{" "}
          <Link to="/signup" className="text-primary underline">
            Signup Now
          </Link>
        </div>
      </Box>
    </div>
  );
};
