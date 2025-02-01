import "../Styles/Home.css"
import {useState } from "react"

 import { useNavigate } from "react-router-dom";
const Home =()=>{
    const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const handleLogin = async () => {
    const response = await loginUser(username, password);
    if (response.success) {
      localStorage.setItem("userId", response.userId);
      navigate("/quiz");
    } else {
      alert("Invalid Credentials");
    }
  };

    return (
        <div className="container">
            <h1>Welcome to Quiz Application</h1>
            <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      
      <button  className="button"onClick={handleLogin}>Login</button>
      </div>
        
    )
}
export default Home