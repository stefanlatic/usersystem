import React from 'react';
import {RecoilRoot, useRecoilValue} from 'recoil';
import { Login } from './Components/Login';
import UserData from './Components/UserData';

 const App = () => {
  return (
    <>
      <RecoilRoot>
        <UserData />
        <Login />
      </RecoilRoot>
      
    </>

    
  )
}
export default App;