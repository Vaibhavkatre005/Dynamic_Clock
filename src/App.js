import React, { useState } from "react";
import "./App.css"


const App = () =>{

    let newTime=new Date().toLocaleTimeString();
    const state = useState();
    const [currTime, setCurrTime]=useState(newTime);
    const str=()=>{
        newTime=new Date().toLocaleTimeString()
        setCurrTime(newTime);
    }
    setInterval(str, 1000)


    return(
        <div className="clock">
            <h1>{currTime}</h1>
        </div>
    )
}

export default App