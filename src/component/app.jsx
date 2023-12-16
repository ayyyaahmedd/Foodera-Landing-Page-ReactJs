import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './RootLayut';
import Home from './home';
import About from './about';

const App = () => {
  return (
    //The basename should match the base path of your GitHub Pages URL.
    <Router basename="/Foodera-Landing-Page-ReactJs">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
 
export default App;