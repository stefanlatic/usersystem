import React from "react";
import { useForm } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/userState"


export const Login = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const setUserState = useSetRecoilState(userState);
  const userData = useRecoilValue(userState);

  const handleLogin = (data) => {
    if(data.email !== "admin@admin.com" || data.password !=="123456") {
      setError("errorData", {
        type: "manual",
        message: "Uneti podaci nisu tacni",
      });
      
      return;
    }
    setUserState({ 
      "loggedIn" : true,
      "email" : data.email
    })
  }

  const logoutUser = () => setUserState({});

  return (

    !userData.loggedIn ? (
      <form onSubmit={handleSubmit(handleLogin)}>

            {errors.errorData && <p>{errors.errorData.message}</p>}
      <input
        {...register("email")}   type="text" placeholder='Unesite Vas email'/>

      <input 
        {...register("password")} type='password' placeholder="Unesite Vasu lozinku"/>{
          }
      <button>Login</button>
    </form>
  ) : (
    <button type="button" onClick={logoutUser}>Logout</button>
  )

  )
}