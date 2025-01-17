import React, { useState } from "react";
const PersonalisedLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const handleLogin = () => {
    // <div>
    //   <h2>welcome ! {userName} to the DashBoard..</h2>
    // </div>;
    if(inputValue.trim() && inputValue1.trim()){
      setIsLoggedIn(true);
      setUserName(inputValue);
    }
    else{
      alert("Please Enter the Name and Password");
    }
  };
  // function getValue() {
  //   var userName = document.getElementById("userName").value;
  //   console.log(userName);
  // }
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setInputValue("");
  };
  return (
    <div>
      <h1>Personalised Login</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <div>
          Name : <input
            id="inp"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your Name : "
          />
          <br />
          Password : <input
            id="inp"
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="password : "
          />
          <br />
          <button onClick={handleLogin} >Log In</button>
        </div>
      )}
      {isLoggedIn && <h2>Welcome, {userName} !! How are You ??</h2>}
      {!isLoggedIn && <h2>Please Log In</h2>}
    </div>
  );
};
export default PersonalisedLogin;
