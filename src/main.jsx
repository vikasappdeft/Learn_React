import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Sidebar from './Layouts/Sidebar.jsx';
import Introduction from './C1-introduction/Introduction.jsx';
import DescribingUI from './C2-DescribingUI/DescribingUI.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Jsx from './C2-DescribingUI/Jsx.jsx';
import States from './C2-DescribingUI/States.jsx';
import Props from './C2-DescribingUI/Props.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<><Sidebar /><Introduction /></>
  },
  {
    path:'/components',
    element:<><Sidebar /><DescribingUI /></>
  },
  {
    path:'/jsx',
    element:<><Sidebar /><Jsx /></>
  },
  {
    path:'/states',
    element:<><Sidebar /><States /></>
  },
  {
    path:'/props',
    element:<><Sidebar /><Props data="Love the way you learn" /></>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
