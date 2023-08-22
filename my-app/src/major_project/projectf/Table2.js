import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as AiIcon from "react-icons/ai";

import "./work.css";
// this is the layout for table 2
const ChartDataget = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let result = await fetch("http://3.111.144.19:5000/getitemchart", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("authentication")),
        },
      });
      result = await result.json();
      setProduct(result);
      console.log(result);
    } catch (error) {
      alert(
        "Connection refused token expired please log again or check internet connection"
      );
    }
  };

  const hendelerDelete = async (id) => {
    try {
      let result = await fetch(
        `http://3.111.144.19:5000/deletechartitem/${id}`,
        {
          method: "Delete",
          headers: {
            authorization: JSON.parse(localStorage.getItem("authentication")),
          },
        }
      );

      result = await result.json();
      if (result) {
        alert("Item deleted");
        getProduct();
      }
    } catch (error) {
      alert("conection refused please loginor before check internet conection");
    }
  };
  return (
    <>
      <div className="create">
        <Link to="/Create" style={{ textDecoration: "none" }}>
          Add Data
        </Link>
      </div>
      <div className="create" style={{ marginLeft: "122px" }}>
        <Link to="/Maindash" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          border: "1px solid black",
          display: "inline-block",
          marginLeft: "20%",
        }}
      >
        <ul style={{ margin: 0, display: "table-row" }}>
          <li
            style={{
              display: "inline-block",
              color: "white",
              padding: "5px",
              width: "186px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
            }}
          >
            S.No
          </li>
          <li
            style={{
              display: "inline-block",
              color: "white",
              padding: "5px",
              width: "150px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
            }}
          >
            Name
          </li>
          <li
            style={{
              display: "inline-block",
              color: "white",
              padding: "5px",
              width: "150px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
            }}
          >
            Sale Price
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "150px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
              color: "white",
            }}
          >
            Category
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "182px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
              color: "white",
            }}
          >
            Action
          </li>
          <li
            style={{
              display: "inline-block",
              color: "white",
              padding: "5px",
              width: "182px",
              background: "rgb(62 62 114)",
              border: "1px solid rgb(62 62 114)",
              marginLeft: "-44px",
            }}
          >
            Remove
          </li>
        </ul>
        {Product.length < 1 ? (
          <p>Empty </p>
        ) : (
          <ul>
            {Product.map((item, index) => (
              <ul
                style={{ marginLeft: "0px", borderBottom: "1px solid gray" }}
                key={item._id}
              >
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "175px",
                  }}
                >
                  {index + 1}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "184px",
                  }}
                >
                  {item.Name}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "150px",
                  }}
                >
                  {item.Purches}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    border: "1px solid white",
                    padding: "5px",
                    width: "150px",
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
                  <Link to={"/updatechartdata/" + item._id}>
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
export default ChartDataget;
