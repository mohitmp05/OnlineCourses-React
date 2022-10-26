import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Allcourses from './allcourses';
import Heading from './heading';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Register from './register';


const App = () => {
  return(
    <Router>
    <div>
      <Heading />
      <br></br>
      
      <div className="content">
        <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/courses' element={<Allcourses/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>

      <Footer />
    </div>
    </div>
	</Router>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)