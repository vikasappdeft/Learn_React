import { useState } from "react";

function FunctionCall(){
    const [counter, setCounter] = useState(0);
    function incremen(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }
    
    return(
        <div>
            <h1 className="mb-4">
                <button className="badge bg-secondary" onClick={incremen}>+</button>
                <button className="badge bg-secondary">{counter}</button>
                <button className="badge bg-secondary" onClick={decrement}>-</button>
            </h1>
        </div>
    )
}
export default FunctionCall;