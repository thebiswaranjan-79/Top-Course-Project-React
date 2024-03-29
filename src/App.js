import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Card from "./components/Card"
import Spinner from "./components/Spinner";
//import { useEffect } from "react";

const App = () => {
  const[courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);


  useEffect( () =>{
    const fetchData = async() =>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();

        // Save the Data into a Variable 
        setCourses(output.data);
      }catch(error){
          toast.error("Something is Wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
       <Navbar/>
      </div>
        <div className="bg-bgDark2">
            <div>
              <Filter
              filterData = {filterData}
              />
            </div>
            
            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
              }
            </div>
        </div>
      
    </div>
  );
};

export default App;
