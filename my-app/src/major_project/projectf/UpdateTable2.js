import React, { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";
// this this is the form  for update data of table 2 when use click on update icone user redirect to this page 

const Update = () => {
  const Navigate=useNavigate();
  const [Name, setName] = useState("");
  const [Purches, setprice] = useState("");
  const [category, setcatagory] = useState("");

  const params = useParams();
  const Complete = async (event) => {
    event.preventDefault()
    console.log(Name, Purches, category);
    try{
    let result = await fetch(
      `http://3.111.144.19:5000/updatechatrData/${params.id}`,
      {
        method: "put",
        body: JSON.stringify({ Name, Purches, category }),
        headers: {
          "Content-Type": "Application/json",
          authorization: JSON.parse(localStorage.getItem("authentication")),
     
        },
      }
    );
    result = await result.json();
    console.log(result);
    alert("Item updated")
Navigate("/Maindash/table2")
    }catch(error){
      alert("Connection refused token expired please log again or check internet connection")
    }
  };
  useEffect(() => {
    getitemdetail();
  }, []);

  const getitemdetail = async () => {
    console.log(params);
  
    let result = await fetch(
      `http://3.111.144.19:5000/updateitemchartData/${params.id}`,{
        headers: {
          "Content-Type": "Application/json",
          authorization: JSON.parse(localStorage.getItem("authentication")),
     
        }
      }
    );
    result = await result.json();
    console.log(result);
    setName(result.Name);
    setprice(result.Purches);
    setcatagory(result.category);
    
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
                    value={Purches}
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
                <div className="inputBox"></div>
                <div className="inputBox">
                  <button type="submit" value="Submit">
                    Update
                  </button>
                  <Link to="/Maindash/table2" style={{textDecoration:"none"}}>Home Page</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
export default Update;
