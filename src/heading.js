import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Register from './register';

const Heading = () =>
{
  return(
    <Router>
    <div>
      <h1 className="ui dividing header" style={{margin:"5px",textAlign: 'center'}}><i className='desktop icon'/>Tech Geek: Affordable Online Courses</h1>
      <div class="ui pointing menu">
      <a class="item">Home</a>
      <a class="active item">Courses</a>
      <a class="item" href='/register'>Sign-Up</a>
      <div class="right menu">
      <div class="item">
      <div class="ui transparent icon input">
      <input type="text" placeholder="Search for courses"/>
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>
    </div>
    <Routes>
      <Route path='/register' element={<Register/>} />
	</Routes>
	</Router>
  )
}

export default Heading;