import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

//  here i define form for table 1
const Yash3 = () => {
    const [Name,setName]=useState("");
    const [price,setprice]=useState();
    const [category,setcatagory]=useState("");
  const Navigate=useNavigate();
  
    const Complete =async(event)=>{
    event.preventDefault()
    const _id=localStorage.getItem('id');
    
    // console.log(Name,price,category,company,_id)
    try{

    
    let result = await fetch("http://3.111.144.19:5000/item", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
      body: JSON.stringify({ Name, price, category, _id }),
    });


result=await result.json();
console.log(result)
alert("1 Item added")
Navigate("/Maindash")
  }catch(error){
    alert("Connection refused token expired please log again or check internet connection")
  }
}
  return (
    
    <>
      <section style={{
        background:"linear-gradient(rgb(248 248 249), rgb(194 191 196))"
      }}>
      
      <div className="box" style={{    background: "#a1acac"}}>
        
    
        <div className="container">
          <div className="form">
            <h2>Create Sale Data Set</h2>
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
        required
      ></input>
              </div>

              <div className="inputBox">
              <input
        className="payfield"
        type="text"
        value={category}
        onChange={(e) => setcatagory(e.target.value)}
        placeholder="catagory"
        required
      ></input>
              </div>
             
              <div className="inputBox">
                <button type="submit" value="Submit">
                  Enter
                </button>
              </div>

          <Link to="/Maindash" style={{textDecoration:"none"}}>Home Page</Link>
              
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Yash3;
