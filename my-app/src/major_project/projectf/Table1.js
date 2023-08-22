import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as AiIcon from "react-icons/ai";

import "./work.css";
// this is the table 1 layout
const Table1 = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async (err,res) => {
    try{
    let result = await fetch("http://3.111.144.19:5000/getitem", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
    });
    result = await result.json();
    setProduct(result.products);
      console.log(result);
  }catch(error){
    alert("conection refused please loginor before check internet conection")
  }
   
  

    
    
  };
  
  const hendelerDelete = async (id) => {
    let result = await fetch(`http://3.111.144.19:5000/deleteitem/${id}`, {
      method: "Delete",
      headers: {
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
    });
    result = await result.json();
    if (result) {
      alert("Item deleted");
      getProduct();
    }
  }

  return (
    <>
      <div className="create" style={{ top: "291px" }}>
        <Link
          to="/CreateSale"
          style={{ textDecoration: "none", display: "inline-block",color:"White" }}
        >
          Add Data
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          border:"2px solid rgb(62 62 114)",
          display: "inline-block",
          marginLeft: "20%",
        }}
      >
        <ul
          style={{
            margin: 0,
            // boxShadow: "0 5px 12px rgba(32,32,32,.3)",
          border:"2px solid rgb(62 62 114)",

            display: "table-row",
          }}
        >
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "186px",
              // background: "#c277cc",
              background: "white",
              color:"black",
              width: "150px",

              border:"1px solid rgb(62 62 114)" 
            }}
          >
            S.No
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "150px",
              background: "white",
              color:"black",
              border:"1px solid rgb(62 62 114)" 
            }}
          >
            Name
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "150px",
              background: "white",
              color:"black",
              border:"1px solid rgb(62 62 114)" 
            }}
          >
            Price
          </li>
          <li
            style={{
              display: "inline-block",
              // border: "1px solid white",
              padding: "5px",
              width: "150px",
              background: "white",
              color:"black",
            border:"1px solid rgb(62 62 114)" 
            }}
          >
            Category
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "182px",
              background: "white",
              color:"black",
              border:"1px solid rgb(62 62 114)" 
            }}
          >
            Action
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "182px",
              background: "white",
              color:"black",
              
              border:"1px solid rgb(62 62 114)" 
            }}
          >
            Remove
          </li>
        </ul>
        {Product.length===0 ? 
        (<p>Empty</p>):(
          <ul>
            {Product.map((item, index) => (
           
              <ul style={{  marginLeft:"0px",borderBottom: "1px solid gray"}} key={item._id}>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "122px",
                    
                    marginLeft:"-55px"
                  }}
                >
                  {index + 1}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "175px",
                    marginLeft:"-11px"
                  }}
                >
                  {item.Name}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "172px",
                    marginLeft:"-44px"
                  }}
                >
                  {item.price}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "182px",
                    marginLeft:"-24px"
                  }}
                >
                  {item.category}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  <Link to={"/updateTable/" + item._id}>
                    <AiIcon.AiFillEdit />
                  </Link>
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  <Link>
                    <AiIcon.AiOutlineDelete
                      onClick={() => hendelerDelete(item._id)}
                    />
                  </Link>
                </li>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Table1;
