import React from 'react';
import './App.css';
import DigitalClock from './components/DigitalClock';
import Hooks from './components/Hooks';
import TimeRefresh from './components/TimeRefresh';

const Slot = (props) =>

{
  let{x,y,z}=props //object destructing
  if(x===y &&  y===z){
    return(
      <>
        <div className='slot_inner'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is matching.</h1>
        </div>
      </>
    );
  }
  else{
    return(
      <>
      <div className='slot_inner'>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>this is not matching.</h1>
      </div>
    </>
    );
  }
};
const  App=()=>{
  return (
    <>
 {/* <Hooks/>
   <TimeRefresh/>*/}
   <DigitalClock/>
    </>
  );
}

export default App;
