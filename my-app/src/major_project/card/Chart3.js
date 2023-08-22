import React,{useState,useEffect} from 'react'
import {
    ResponsiveContainer,
 
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
  
    BarChart,
    Bar,
  } from "recharts";

// const CustomTooltip = ({ payload, label, active, }) => {
//   if (active && payload && payload.length) {
//     // Customize the tooltip content here based on your requirements
//     return (
//       <div style={{ height:"70px",   background: 'rgba(255, 255, 255, 0.5)',  borderRadius:"9px", padding: '5px',}}>
//         <p>{`Data: ${payload[0].value}`}</p>
//         <p>{`Label: ${label}`}</p>
//       </div>
//     );
//   }

//   return null;
// };
                                      // here i define chart 3
const Chart3 = () => {
    const [Name1, setName1] = useState("");
    const [Name, setName] = useState("");
    useEffect(() => {
        getProduct();
        getProduct1();
      }, []);
   
    const getProduct = async () => {
      try{
        let result = await fetch("http://3.111.144.19:5000/getitem", {
          headers: {
            authorization: JSON.parse(localStorage.getItem("authentication")),
          },
        });
        result = await result.json();
        console.log(result, "ll");
        setName(result.products);
      }catch(error){
        alert("conection refused please loginor before check internet conection")
      }
      }

       const getProduct1 = async () => {
        
try{
        
        let result = await fetch("http://3.111.144.19:5000/getitemchart", {
          headers: {
            authorization: JSON.parse(localStorage.getItem("authentication")),
          },
        });
        result = await result.json();
    
        console.log(result, "hh");
        setName1(result);
      }catch(error){
        alert("conection refused please loginor before check internet conection")
      }
      }
  return (
    <div>
                  <ResponsiveContainer width={"90%"} aspect={2}>
            <BarChart
              data={Name}
             width={30}
             height={30}
             margin={{ top: 1, left: 100, right: 7, bottom: 1 }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />
              <Tooltip />

              <Legend />
              <Bar
                data={Name1}
                dataKey="Purches"
                stroke="black"
                fill="black"
                opacity=".4"
                color="black"
                barRadius={10}
              />
              <Bar
                data={Name}
                dataKey="price"
                stroke="black"
                fill="gray"
                opacity=".4"
                color="black"
                barRadius={10}
              />
            </BarChart>
          </ResponsiveContainer>
      
    </div>
  )
}

export default Chart3

