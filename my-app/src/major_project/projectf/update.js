import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./logingform.css";

import { useParams } from "react-router-dom";
// this this is the form  for update data of table 1 when use click on update icone user redirect to this page 
const Yash5 = () => {
  const Navigate=useNavigate();
  const [Name, setName] = useState("");
  const [price, setprice] = useState("");
  const [category, setcatagory] = useState("");

  const [company, setcompany] = useState("");
  const params = useParams();
  const Complete = async (event) => {
    event.preventDefault()
    console.log(Name, price, category, company);
try{


    let result = await fetch(`http://3.111.144.19:5000/updateitem/${params.id}`, {
      method: "put",
      body: JSON.stringify({ Name, price, category, company }),
      headers: {
        "Content-Type": "Application/json",
        authorization: JSON.parse(localStorage.getItem("authentication")),
   
      },
    })
   

    result = await result.json();
    console.log(result);
    
    
    Navigate("/Maindash")
  }catch(error){
    alert("Connection refused token expired please log again or check internet connection")
  }
  };
 
  useEffect(() => {
    getitemdetail()
    
    
    
    
  }, []);

  const getitemdetail = async () => {

    console.log(params);
    let result = await fetch(`http://3.111.144.19:5000/updateitem/${params.id}`,{
      headers: {
        "Content-Type": "Application/json",
        authorization: JSON.parse(localStorage.getItem("authentication")),
   
      }
    });
    result = await result.json();
    console.log(result);
    setName(result.Name);
    setprice(result.price);
    setcatagory(result.category);
    setcompany(result.company);
  }
  
  return (
    <>
      <section>

  <div className="box">
    
    <div className="container">
      <div className="form">
        <h2>Update Details</h2>
        <form onSubmit={Complete}>
          <div className="inputBox">
            <input
              className="payfield"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="product name"
              required
            ></input>
          </div>

          <div className="inputBox">
            <input
              className="payfield"
              type="number"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              placeholder="pice"
            ></input>
          </div>
          <div className="inputBox">
            <input
              className="payfield"
              type="text"
              value={category}
              onChange={(e) => setcatagory(e.target.value)}
              placeholder="catagory"
            ></input>
          </div>
         
          <div className="inputBox">
            <button type="submit" value="Submit">
              Update
            </button>
          </div>
          <Link to="/Maindash" style={{textDecoration:"none"}}>Home Page</Link>
          {/* <p className="forget">
            Forget Password ? <a href="#">Click Here</a>
          </p>
          <p className="forget">
            Don't have an account ? <Link to="/">Sing up</Link>
            <br></br>
            <br></br>
            <Link to="/Maindash">Home Page</Link>
          </p> */}
        </form>
      </div>
    </div>
  </div>
</section>;

    </>
  );
};
export default Yash5;

