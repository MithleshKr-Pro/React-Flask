import {React,useState,useEffect} from "react";
class Mithlesh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mithlesh Kumar   ",
      jobTitle: "Software Developer",
      company: "Apple Inc.",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({
      name: "Anjali Kumari",
      jobTitle: "Full Stack Developer",
      company: "Apple Inc.",
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, I am {this.state.name}</h1>
        <h2>I am a {this.state.jobTitle}</h2>
        <h2>Working at {this.state.company}</h2>
        <button onClick={this.updateState} onAbort={this.state}>
          {" "}
          View next Employee{" "}
        </button>
      </div>
    );
  }
}
// class Anjali extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello, Myself Anjali Kumari</h1>
//                 <h2> I'm Opthalmologist ...</h2>
//             </div>
//         );
//     }
// }
export default Mithlesh;
