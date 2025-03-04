import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/userState"


export const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const setUserState = useSetRecoilState(userState);

  const userData = useRecoilValue(userState);

  const handleLogin = () => {
    if(email !== "admin@admin.com" || password !=="123456") {
      return;
    }
    setUserState({ 
      "loggedIn" : true,
      "email" : email
    });
  }

  const logoutUser = () => setUserState({});

  return (
      !userData.loggedIn ? (
     <form>
      <input onInput={e => setEmail(e.currentTarget.value) } type="text" placeholder="Enter your email" />
      <input onInput={e => setPassword(e.currentTarget.value) } type="password" placeholder="Enter your password" />
      <button type="button" onClick={handleLogin}>Login</button>
     </form>
  ) : (
    <button type="button" onClick={logoutUser}>Logout</button>
  )

  )
}