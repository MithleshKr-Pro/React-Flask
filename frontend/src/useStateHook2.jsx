import React,{useState} from 'react';
const ParentComponent=()=>{
    const[count, setCount]=useState(0);
    const handleIncrementByTen=()=>{
        setCount(count+10);
    };
    return(
        <div>
            <p>Parent Count : {count}</p>
            <ChildComponent count={count}/>
            <button onClick={handleIncrementByTen}>Increment</button>
        </div>
    );
};
const ChildComponent=({count})=>{
    return <p> Child Count : {count}</p>
};
export default ParentComponent;