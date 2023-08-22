import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'antd/dist/antd.css';

import Yash6 from './major_project/projectf/CreateTable2';
import PrivateComponent from './major_project/projectf/PrivateComponent';
import Signinf from "./major_project/projectf/SignInF"

import Yash3 from './major_project/projectf/CreateTable1';
import Table1 from './major_project/projectf/Table1';
import Yash5 from './major_project/projectf/update';
import ChartDataget from './major_project/projectf/Table2';
import Update from './major_project/projectf/UpdateTable2';
import Desboard from './major_project/projectf/chartdesbord';
import Maindash from './major_project/projectf/maindash';
import LoginForm from './major_project/projectf/loginForm';
import Chart2 from './major_project/card/Chart2';

function App() {
  return (  
    <div className="App">
       <BrowserRouter basename={process.env.PUBLIC_URL}>
  
 
        

       <Routes>
     

<Route path="/"element={<Signinf/>}></Route>
<Route path="/Loginform"element={<LoginForm/>}></Route>



       </Routes>

      
       <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/CreateSale" element={<Yash3 />}></Route>
            <Route path="/table1" element={<Table1 />}></Route>
            <Route path="/updateTable/:id" element={<Yash5 />}></Route>
            <Route path="/Maindash/table2" element={<ChartDataget />}></Route>
            <Route path="/updatechartdata/:id" element={<Update />}></Route>
            <Route path="/desboard1" element={<Desboard />}></Route>
            <Route path="/Maindash" element={<Maindash />}></Route>
            <Route path="/Create" element={<Yash6 />}></Route>
            <Route path="/Chart1" element={<Chart2 />}></Route>
          </Route>
        </Routes>  
         
      </BrowserRouter>
    </div>
  );
}
export default App;
