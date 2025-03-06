import React from 'react';
import {RecoilRoot, useRecoilValue} from 'recoil';
import { Login } from './Components/Login';
import UserData from './Components/UserData';
import { Tasks } from './Components/Tasks';

 const App = () => {
  return (
    <>
      <RecoilRoot>
        
        <Tasks />
        <UserData />
        <Login />
      </RecoilRoot> 
      
    </>

    
  )
}
export default App;