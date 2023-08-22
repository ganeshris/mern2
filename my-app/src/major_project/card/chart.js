import React from "react"
//   import "../work.css";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
  
  } from "recharts";
  
  
                                     //   here i define chart 1 which not use api data whuch have oun json data you can clearly see that here
  
const Chart=()=>{
    const pdata = [
        {
          month: "Jun",
          OutFlow: 30000,
          Inflow: 1000,
        },
        {
          month: "Fab",
          OutFlow: 20000,
          Inflow: 30000,
        },
        { month: "March", OutFlow: 10000, Inflow: 20000 },
        { month: "April", OutFlow: 35000, Inflow: 32000 },
        { month: "May", OutFlow: 1000, Inflow: 20000 },
      ];
    
    
return(
    <>
    <ResponsiveContainer width={"90%"} aspect={2}>
    <LineChart
              data={pdata}
              width={30}
              height={30}
              margin={{ top: 1, left: 100, right: 7, bottom: 1 }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" interval={"preserveStartEnd"} />

              <YAxis dataKey="OutFlow" />
              <Tooltip />

              <Legend />
              <Line data={pdata} dataKey="OutFlow" stroke="red" />
              <Line data={pdata} dataKey="Inflow" stroke="black" />
            </LineChart>
          </ResponsiveContainer>

    
    </>
)

}
export default Chart;