import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Mounted");

        return () => {
            console.log("Component unmounted");
        };
    },[count]);

    return (
        <div>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count - 1)}>+</button>
        </div>
    );
}

export default Counter;
