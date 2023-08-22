import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// here i define form for table 2
function Yash6() {
  const Navigate =useNavigate();
  const [Name, setName] = useState("");
  const [Purches, setpurches] = useState("");
  const [category, setcatagory] = useState("");

  const Complete = async (event) => {
    event.preventDefault()
    const _id = localStorage.getItem("id");

    // console.log(Name,price,category,company,_id)
 try{
    let result = await fetch("http://3.111.144.19:5000/itemChart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
      body: JSON.stringify({ Name, Purches, category, _id }),
    })
    result = await result.json();
    console.log(result);
    Navigate("/Maindash/table2")
  }catch(error){
    alert("Connection refused token expired please log again or check internet connection")

  }
  };
  return (
    <>
      <section>
     
        <div className="box">
        
          <div className="container">
            <div className="form">
              <h2>Create Data Set</h2>
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
                    onChange={(e) => setpurches(e.target.value)}
                    placeholder="pirce"
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
                    Enter
                  </button>
                  <Link to="/Maindash" style={{textDecoration:"none"}}>Home Page</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Yash6;
