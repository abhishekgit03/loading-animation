import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import RiseLoader from "react-spinners/RiseLoader";
import Welcome from "./component/welcome";
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>
    {
      setLoading(false)
    },3000)
  },[])


  return (
    <div className="App">
      {
        loading 
        ?
         
              <RiseLoader
              
              color={'orange'}
              margin-top={'50px'}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              />
        :
             <Welcome/>
      }



     
    </div>
  );
}

export default App;
