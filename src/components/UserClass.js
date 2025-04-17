import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Shivam",
        login: "India",
      },
    };
    console.log("Constructor Called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Cvam1999");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    //console.log(json);
    console.log("Component Mounted");
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
    console.log("Render Called");
    const { name, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h1>Name : {login}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Count Decrease
        </button>
        <h2>Class Component</h2>
      </div>
    );
  }
}

export default UserClass;
