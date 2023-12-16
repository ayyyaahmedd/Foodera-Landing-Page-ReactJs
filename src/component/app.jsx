import React from 'react';
import Home from './home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayut';
import About from  './about'


const root = createBrowserRouter(
    createRoutesFromElements(
        <Route path ="/Foodera-Landing-Page-ReactJs/" element={<RootLayout />}>
            <Route path='/Foodera-Landing-Page-ReactJs/' element={<Home/>} /> 
            <Route path="/Foodera-Landing-Page-ReactJs/about" element={<About/>} /> 
            
        </Route>
    )
)

const App = () => {
    return ( 
        <RouterProvider router={root} />
     );
}
 
export default App;