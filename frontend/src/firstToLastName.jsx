import React from "react";
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Andrew",
    };
    this.UpdateState = this.UpdateState.bind(this);
  }
  UpdateState() {
    this.setState({ name: "Andrew Peter" });
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.UpdateState}>Display Full Name</button>
      </div>
    );
  }
}
export default App1;
