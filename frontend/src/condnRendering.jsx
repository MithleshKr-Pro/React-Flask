import React, {useState}    from 'react';
const DashBoard=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const handleLogin=()=>{
        setIsLoggedIn(true);
    };
    const handleLogout=()=>{
        setIsLoggedIn(false);
    };
    return(
        <div>
            <h1>DashBoard</h1>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Log Out</button>
            ):(<button onClick={handleLogin}>Log In</button>)}
            {isLoggedIn && <h2>Welcome, Bro !! How are You ??</h2>}
            {!isLoggedIn && <h2>Please Log In</h2>}
        </div>
    );
};
export default DashBoard;