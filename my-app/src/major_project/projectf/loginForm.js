import React, { useState } from "react";
import "./logingform.css";
import { Link ,useNavigate} from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate();

    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const submit =async (e) => {
        e.preventDefault();

        let response= await fetch('http://3.111.144.19:5000/authdataLogin',{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({email,password})
        })
        // console.log(value);
        let data= await response.json();
      console.log(data)
      

      

        if(data.auth){
          console.log(data)
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data.result.name));
      localStorage.setItem("authentication", JSON.stringify(data.auth));
      
      alert("Welcome")
      navigate("/Maindash")
        }
        else{
            alert("something wrong")
        }
      }
      
  return (
    <section>
      
      <div className="box">
       
        <div className="container">
          <div className="form">
            <h2>Login Form</h2>
            <form onSubmit={submit}>
              <div className="inputBox">
                <input
                  className="payfield"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                ></input>
              </div>
            
             
              <div className="inputBox">
                <input
                  className="payfield"
                  type="password"
                  
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  value={password}
                ></input>
              </div>
              <div className="inputBox">
                <button type="submit"   value="Submit" >LogIn</button>
              </div>

              <p className="forget">
                Forget Password ? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account ? <Link to="/">Sing up</Link><br></br><br></br>
                <Link to="/Maindash">Home Page</Link>
                
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;

