import {appName} from '../App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { zTouch } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `
function Greet(props) {
    return <h1>Hello, {props.name}!</h1>;
}
`;
const codeString1 = `
class Greet extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
`;
function Components(){
    return(
        
        <div class="container my-5">
        <h1 className="mb-4"><span className="badge bg-secondary">React Components</span></h1>
        <h3>Component of app name :<label className="text-info">{appName}</label></h3>
        <p>In the above line app name is passed from App component to Compnents.jsx </p>
        <p>
            React components are independent, reusable building blocks. For example, a webpage might have components such as 
            <strong>Header</strong>, <strong>Sidebar</strong>, <strong>Footer</strong>, and <strong>MainContent</strong>. 
            Essentially, everything displayed in a React app is a combination of components.
        </p>
        <p>
            Components accept inputs called <strong>props</strong> and return React elements that define the UI. They can be reused 
            across the entire application, enhancing performance by updating only the required component rather than reloading the whole page.
        </p>
        <h2 class="mt-4">Types of React Components</h2>
        <ul class="list-group list-group">
            <li class="list-group-item">
                <h4>Functional Components</h4>
                <pre>
                    <code>
                    <SyntaxHighlighter language="javascript" style={zTouch}>
                        {codeString}
                    </SyntaxHighlighter>
                    </code>
                </pre>
                <p>
                    Functional components are functions that return React elements. These are the most commonly used components 
                    because of their simplicity and lack of reliance on the <code>this</code> keyword.
                </p>
               
            </li>
            <li class="list-group-item">
                <h4>Class Components</h4>
                <pre>
                    <code>
                    <SyntaxHighlighter language="javascript" style={zTouch}>
                        {codeString1}
                    </SyntaxHighlighter>
                    </code>
                </pre>
                <p>
                    Class components include lifecycle methods such as <code>componentDidMount</code> and <code>componentDidUpdate</code>. 
                    They provide more control but are less commonly used in modern React applications.
                </p>
            </li>
        </ul>
    </div>
)}

export default Components;