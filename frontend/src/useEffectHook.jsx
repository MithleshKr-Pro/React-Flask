import React,{useState,useEffect} from"react";
const UseEffectHook=()=>{
    const [data,setData]=useState([]);
        const API_URL="https://dummyjson.com/users";    
        useEffect(()=>{
            fetchSpeakers();
        },[]);
        return(
            <ul>
                {data.map(item=>(
                    <li key={item.id}>
                        {item.firstName}{lastName}
                    </li>
                ))}
            </ul>
        );
    };
    const fetchSpeakers=async()=>{
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            setData(data.users);
        }catch(error){
            console.log("Error",error); 
        }
    };
    export default UseEffectHook;



