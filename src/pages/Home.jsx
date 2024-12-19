import React from 'react';

const Home = () => {
  return (
    <div 
      className='home text-center' 
      style={{ backgroundColor: '#D9AFD9' }}  
    >
      <h1 className='fw-bold  ' >💕Welcome To Home Page💕</h1>
      <img 
        src='http://myweeklypreview.com.au/wp-content/uploads/2017/10/shutterstock_641814016.jpg'  
        alt='' 
        style={{
          width: '1200px',
          marginLeft: '15px',
         // boxShadow: '5px 3px 3px white',
          marginTop: '20px'
        }}
      />
    </div>
  );
}

export default Home;
