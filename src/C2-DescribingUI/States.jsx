import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { zTouch } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FunctionCall from './FunctionCall.jsx';
import { Sandpack } from "@codesandbox/sandpack-react";
import { levelUp } from "@codesandbox/sandpack-themes";
const code = `import {useState} from 'react'`;

const functionCallCode = `
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
`;
const States = () => {
    return (
        <div>
            <div class="container my-5">
                
                
                <h1 className="mb-4"><span className="badge bg-secondary">Understanding States</span></h1>
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>States</strong> is a container to store data like variables but difference is when data of state changed the corosponding component automatically re-rendered.
                    </li>
                    <li class="list-group-item">You have to import it to use it.
                        <SyntaxHighlighter language="javascript" style={zTouch}>
                            {`import {useState} from 'react'`}
                        </SyntaxHighlighter>
                    </li>
                    <li class="list-group-item">To show the updated values of component it should be re-rendered otherwise component displays the old value.</li>
                    <li class="list-group-item">Like in FunctionCall.jsx we used<code>[counter,setCount] = useState(0)</code> to set values dynamically. Because of that the componet re-renders it self after button clicked.</li>
                    <li class="list-group-item">
                        Example: Lets make a counter
                    </li>
                    <li class="list-group-item">
                        <FunctionCall />
                        <SyntaxHighlighter language='javascript' style={zTouch}>
                            {functionCallCode}
                        </SyntaxHighlighter>
                    </li>
                    <li class="list-group-item">
                        <Sandpack theme={levelUp} template="react" files={{
                        '/FunctionCall.js':
                            `import { useState } from "react";
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
                            export default FunctionCall;`,
                        }}/>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default States
