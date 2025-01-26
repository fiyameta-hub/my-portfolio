import React, { useContext } from 'react';
import Skills from './Skills';
import Testimony from './Testimony'; 
import About  from './About';
const Home = () => {

  return (
    <>
        <About/>
        <Skills/>
        <Testimony />
    </>
  );
};

export default Home;
