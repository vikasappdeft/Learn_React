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
const customer = `const CustomerData =[{ name: 'Andrew', email: 'Andrew@test.com' },{ name: 'Vik', email: 'vik@test.com' }];
                                <Customer data={CustomerData}/>`;
const customerOutput = `function Customer({data}){
    
    return(
        <div className='component'>
            <h2 className="segment_heading">Use of Props</h2>
            {data.map(item=>(<h3 key={item.name}>{item.name}</h3>))}
        </div>
    )
}
export default Customer;
`;
const Props = ({data}) => {
    return (
        <div>
            <div class="container my-5">
                <h1 className="mb-4"><span className="badge bg-secondary">Understanding Props</span></h1>
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>Props</strong>  are used to pass data from one component to another component. Like in <code>{`<Customer name='Sam' age=30 />`}</code> name and age are passed in component
                    </li>
                    <li class="list-group-item">See in Props.jsx <label className="text-info">{data}</label> comming from Main.jsx by using <code>"&#123; &#125;"</code> in function and passed like attribute in Main.jsx</li>
                    <li class="list-group-item">You will learn props eventually when developing project. Just for Understanding see below example</li>
                    <li class="list-group-item">
                        <SyntaxHighlighter language="javascript" style={zTouch}>
                            {customer}
                        </SyntaxHighlighter>
                       <code>{`<Customer data={CustomerData}/>`}</code> CutomerData is passed in Customer Component as props.
                       <SyntaxHighlighter language="javascript" style={zTouch}>
                            {customerOutput}
                        </SyntaxHighlighter>
                        And retrived useing <code>data.map</code>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Props
