import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LuTimerReset } from "react-icons/lu";
import { BsPauseCircle } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
function App() {
  const [time, setTime] = useState(0);
  const [running ,setRunning]=useState(false);
  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(() => {
        setTime((prevTime)=>prevTime+10)
      }, 10);
    } else if(!running){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  },[running])
  return (
    <><div className="app-container">
      <h4> Stop Watch <CiClock2 /></h4>
      
      <div className="main-container">
      <div className="time-container">
        <span>{( Math.floor((time / 60000) % 60))}:</span>
        <span>{( Math.floor((time / 1000) % 60))}:</span>
        <span>{(((time /10)% 100))}</span>
      </div>
      <div className="button-container">
        <button onClick={()=> setRunning(!running)}> {running?< FaRegCirclePlay/>:<BsPauseCircle/>}</button>
        <button onClick={()=>setTime(0)}>< LuTimerReset/></button>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
