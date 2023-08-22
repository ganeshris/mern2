import React from "react";
import {Navigate,Outlet} from 'react-router-dom'
//  here i define privat coomponent wher use dont have authentication key that user auto metically
//  redirect to sign page and can mnot visit any other page using url if not have authentication key 
const PrivateComponent=()=>{
    const  auth=localStorage.getItem('authentication');
    return auth?<Outlet/>:<Navigate to="/"/>
}
export default PrivateComponent;




