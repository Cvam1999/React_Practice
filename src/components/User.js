import { useState } from "react";

const User = () =>{
    const[count] = useState(0);
    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <p>This is the user component.</p>
            <p>Shivam Gupta</p>
        </div>
    )
}
export default User;