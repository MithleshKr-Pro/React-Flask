import React, { useState, useEffect, useContext } from "react";
const UseEffectHook = () => {
  const [data, setData] = useState([]);
//   const API_URL = "https://www.catfacts.net/api/";
//   const API_URL = "https://cat-fact.herokuapp.com/facts?type=cat";
    const API_URL = "/api/facts?type=cat";

//   const API_URL = "https://dummyjson.com/users";
//   const context=useContext(initialValue);
  useEffect(() => {
    fetchSpeakers(API_URL);
  }, []);

  const fetchSpeakers = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        mode:"cors",
        headers:{
            "Content-type":"application/json",
            // "Access-Control-Allow-Origin": "*",
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <h2>UseEffect Hook</h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            {/* <div>{item.firstName} {item.lastName}</div>
            <div>{item.height} {item.gender}</div>
            <div>{item.phone} {item.email}</div>
            <div>{item.username} {item.password}</div> */}
            <div>{item.text}</div>
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectHook;
