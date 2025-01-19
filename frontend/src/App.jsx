// import React, { useState } from "react";
import "./App.css";
import SearchSpeaker from "./SearchSpeaker";
import App1 from "./firstToLastName";
import SpeakerProfile from "./SpeakerProfile";
// import Mithlesh from "./MithleshComponent";
// import Anjali from "./MithleshComponent";
import AppHook from "./useStateHook";
import ParentComponent from "./useStateHook2";
import DashBoard from "./condnRendering";
import PersonalisedLogin from "./condnRendering2";
import UseEffectHook from "./useEffectHook";
import UseRefHook from "./useRef";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {
//   const speakerName=" John Wilson"
//   return (
//     <div style={{backgroundColor: 'gray', margin:20,
//       color:'white'}}>
//       <SpeakerProfile />
//       </div>
//   );
//  }
//  export default App;

// function SpeakerProfile(props){
//   return (
//     <>
//       <h3>{props.name}</h3>
//       <p>posiyion:{props.jobTitle}</p>
//       <p>Company: {props.company}</p>
//     </>
//   );

// }

//parent component
// function App(){
//   return (
//     <>
//       <h1>Speaker Profile</h1>
//       //child component with attributes name,jobTitleand company inside parent component
//       <SpeakerProfile
//         name='Juliet Runolf'
//         jobTitle='Director,Marketing'
//         company='Abernathy Group'
//       />

//     </>
//   );
// }
// export default App;

function App() {
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
        color: "orange",
        backgroundColor: "black",
        borderRadius: 20,
      }}
    >
      {/* <Mithlesh /> */}
      <UseRefHook />
      <br />
      <UseEffectHook />
      <br />
      <SearchSpeaker />
      <br />
      <App1 />
      <br />
      <SpeakerProfile />
      <br />
      <AppHook />
      <br />
      <ParentComponent />
      <br />
      <DashBoard />
      <br /> 
      <PersonalisedLogin />
      <br />

    </div>
  );
}
export default App;