import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div className='ui comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='profile picture'></img>
        </a>
        <div className='content'>
          <a href='/' className='author'>Mohit</a>
          <div className='metadata'>
            <span className='date'>Today at 7pm</span>
          </div>
          <div className='text'>Welcome to React Blog</div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)