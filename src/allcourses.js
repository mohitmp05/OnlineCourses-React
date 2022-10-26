import React from 'react';
import Courses from './courses';
import img1 from './images/img1.png';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.jpg';
import img10 from './images/img10.png';

const Allcourses = (props) =>
{
  return(
    <div className='ui fully relaxed five column grid'>
      
      <Courses 
      name = 'Full Stack Development' 
      price = '₹12000' 
      duration = '3 Weeks' 
      image = {img1} />
      
      <Courses  
      name = 'Java Full Stack Development' 
      price = '₹10000' 
      duration = '5 Weeks'   
      image = {img2} />
      
      <Courses 
      name = 'Android App Development' 
      price = '₹5000' 
      duration = '2 Weeks'   
      image = {img3} />

      <Courses 
      name = 'HTML, CSS & Javascript' 
      price = '₹2000' 
      duration = '1 Week'   
      image = {img4} />

<Courses  
      name = 'Python Pro Bootcamp' 
      price = '₹3499' 
      duration = '5 Weeks'   
      image = {img5} />

<Courses 
      name = 'AWS Certified Course' 
      price = '₹2000' 
      duration = '3 Weeks' 
      image = {img6} />
      
      <Courses  
      name = 'React, Complete Guide' 
      price = '₹10000' 
      duration = '5 Weeks'   
      image = {img7} />
      
      <Courses 
      name = 'JavaScript Course' 
      price = '₹1500' 
      duration = '2 Weeks'   
      image = {img8} />

      <Courses 
      name = 'MS Excel Course' 
      price = '₹800' 
      duration = '1 Week'   
      image = {img9} />

<Courses  
      name = 'Data Science Course' 
      price = '₹10000' 
      duration = '6 Weeks'   
      image = {img10} />

    </div>
  )
}

export default Allcourses;
    