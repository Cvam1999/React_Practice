import User from "./User";   
import UserClass from "./UserClass"; 

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <User />
      <UserClass />
    </div>
  );
}

export default About;