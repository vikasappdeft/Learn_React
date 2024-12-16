React JS Notes

# Basic introduction
    ~ Just a javascriptlibrary not a framework
    ~ SPA(Single page Application) 
    ~ used to make front end
    ~ Vite is used to setup react JS. (not only react it can setup other libraried too like vueJS)
    ~ Vite is bundler [Frontend tool] that grabs react and react-dom from npm and setup your custom build process.
    ~ Vite can develop your build very fast (developemnt and production)
    ~ To setup react you can use parcel also.
    ~ Npm create vite
    ~ follow the instruction then go to your project then install npmm in it then run npm dev



# Flow of react app

    ~ index.htm   : Contains:
                             A div with id “root”
                             Script to load main.jsx
    ~ main.jsx    : It creates a root div by getElementById(“root”) 
                    <App /> gets the code from app.jsx and load it to div(“root”)
    ~ App.jsx     : It contains all the components which executes the SPA


# Describing the UI

## Components

    ~ Isolated pieces of UI called components. 
    ~ Its a JS function that can be small as button or larage as entire page.
    ~ Starts with Capital letter
    ~ export default is used to export default function from the component(known as Primary Component)
    ~ If you have multiple component in single file then other components can be export with named export.
    ~ Just write export function-name(){ }  and then while importing write import {function-name} from ‘’
    ~ You can export variables and constatnt too by using export keyword befor it. And import it in {}.
    ~ For example check ExComponent.jsx [appName is imported in ExComponent component from App component]


## JSX

    ~ JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
    ~ With the help of Jsx we can write HTML within or side by side JavaScript.
    ~ We can use javascript variables and other things.
    ~ Use variables with JSX.
    ~ To ue JS code inside HTML just use {} for that like {appName}
    ~ For example lets learn simple Click Event and function call see FunCall.jsx.


## State in ReactJS

    ~ State is a container to store data like variables but difference is when data of state changed the corosponding component automatically re-rendered.
    ~ You have to import it to use it. import {useState} from 'react'
    ~ To show the updated values of component it should be re-rendered otherwise component displays the old value.
    ~ Like in FunCall.jsx [counter,setCount] = useState(0) is used to set values dynamically. Because of that the componet re-renders it self after button clicked.
    ~ For another example of states See ToggleImage.jsx in which a toggle button is used to hide and sow image.


## Props in ReactJS

    ~ Props are used to pass data from one component to another component. Like <User name='Sam' age=30 />
    ~ See in ExComponent.jsx "year" comming from App.jsx by using {} in function and passed like attribute in app.jsx
    ~ For detailed example see Customer.jsx
    ~ We can add style without class and We can pass jsx or html in props . See example PassJsx.jsx 

## Forms in ReactJS

    ~ See Forms.jsx



## Loops in ReactJS

    ~ To use loops in React we use map function.
    ~ A unique key should passed inside the loop.
