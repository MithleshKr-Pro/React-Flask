import React,{useState} from 'react';
const AppHook=()=>{
    
    // const [state,stateUpdater]=useState(initialState);
    //initialState is the initial value of the state variable.

    const [count ,setCount]=useState(0);
    const handleIncrementByTen=()=>{
        setCount(count+10);
    };
    const handleDecrementByTen=()=>{
        setCount(count-10);
    };
    const resetCountHandler=()=>{
        setCount(0);
    };
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrementByTen}>Increment by 10</button>
            <button onClick={handleDecrementByTen}>Decrement by 10</button>
            <button onClick={resetCountHandler}>Reset</button>
        </div>
    );

}
export default AppHook;