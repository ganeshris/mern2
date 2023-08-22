import React, { useState } from "react";
import "./logingform.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Signinf() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate();
  const [email, setEmail] = useState("");
  const value = [{ email, password, name }];
  const submit = async (e) => {
    let response;
    e.preventDefault();
  
     response = await fetch("http://3.111.144.19:5000/authdata", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    console.log(value);
 
    const data = await response.json();
    
  
    // localStorage.setItem("data", JSON.stringify(data));
    // localStorage.setItem("user", JSON.stringify(data.result.name));


      if (data.auth && data.result.name) {
      console.log(data.auth);
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data.result.name));
      localStorage.setItem("authentication", JSON.stringify(data.auth));          
          Navigate('/Maindash')
      alert("signup successful");
    } 
    
    
    else {
      alert(data.error)
    }
  };
  return (
    <section>
      
      <div className="box">
        
   
        <div className="container">
          <div className="form">
            <h2>SignIn Form</h2>
            <form onSubmit={submit}>
              <div className="inputBox">
                <input
                  className="payfield"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email@example.com"
                  required
                ></input>
              </div>
              <div className="inputBox">
                <input
                  className="payfield"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Use Name"
                  pattern="[A-Za-z]+" maxLength="8"
                  minLength="3"
                ></input>
              </div>

              <div className="inputBox">
                <input
                  className="payfield"
                  type="password"
                  required
                  pattern="[0-9]{8}]"
                  maxLength="8"
                  minLength="8"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter 8 digits password"
                  value={password}
                ></input>
              </div>
              <div className="inputBox">
                <button type="submit" value="Submit">
                  Sign In
                </button>
              </div>

              <p className="forget">
                Forget Password ? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account ? <Link to="/Loginform">LogIn up</Link>
                <br></br><br></br>
                <Link to="/Maindash" style={{textDecoration:"none"}}>Home Page</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signinf;
