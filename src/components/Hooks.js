import React ,{ useState}from 'react'
import '../index.css'



const Hooks = () => {
    const state=useState();
    console.log(state);
    const [count , setCount]= useState(0);

    const IncNum=() => {
        setCount(count+1);

};
  return (
    <>
    
    <div>
    <h1> {count}  </h1>
      <button onClick={IncNum}>
        Click Me!
      </button>
      
    </div>
    </>
  );
};

export default Hooks
