import { useState } from "react"

export default function Dashboard(){
    // const [view, setView] = useState(true);
    const [view, setView] = useState("List");

    return (
        <div>   
            <h3>Welcome to DeFi Dashboard.</h3> <br></br>
            <button 
            style={
            {
                width:200, 
                height:100, 
                border:"grey 1px solid", 
                borderRadius: "5px", 
                fontSize: 20,
                backgroundColor: view === "List" ? '#0B666A' : '#C30E59'
            }}
            onClick={()=>{setView(view === "List" ? "Chart" : "List")}}
            >
                {/* {view ? "List View" : "Chart View"} */}
                { view }
            </button>
            <p>Here you will see real-time crypto data and manage your portfolio.</p>
        </div>
    )
}