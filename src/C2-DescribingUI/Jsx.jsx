import React from 'react'
import { appName } from '../App.jsx'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { zTouch } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FunctionCall from './FunctionCall.jsx';
const code = `{appName}`;
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
const Jsx = () => {
    return (
        <div>
            <div class="container my-5">
                <h1 className="mb-4"><span className="badge bg-secondary">Understanding JSX</span></h1>
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>JSX</strong> is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
                    </li>
                    <li class="list-group-item">With JSX, you can write HTML alongside or within JavaScript code.</li>
                    <li class="list-group-item">It allows you to use JavaScript variables and expressions directly within the markup.</li>
                    <li class="list-group-item">To use JavaScript code inside HTML, wrap it like this
                        <SyntaxHighlighter language="javascript" style={zTouch}>{code}</SyntaxHighlighter></li>
                    <li class="list-group-item">
                        Example: Learn how to implement a simple click event and function call in <code>FunCall.jsx</code>.
                    </li>
                    <li class="list-group-item">
                        <FunctionCall />
                        <SyntaxHighlighter language='javascript' style={zTouch}>
                            {functionCallCode}
                        </SyntaxHighlighter>
                    </li>
                    <li class="list-group-item">
                        
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Jsx
