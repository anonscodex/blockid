import React from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../GlichText';

const Profile = () => {
    
  return (
    <>
    <div className="mt-6 flex flex-col items-center lg:mt-20 ">
        <h1 className="text-5xl font-bold lg:text-7xl font-weight-700 sm:text-6xl text-center font-weight-700 tracking-wide ">
        Your IDs in one place with <GlitchText text= "Web3" />
        </h1>
        <p className="text-neutral-600 text-1xl mt-5 px-11 text-center max-w-4xl">
        Experience the perfect fusion of exceptional design and lightning-fast delivery, 
        ensuring your projects come to life with unmatched creativity and efficiency
        </p>
    </div>
   

            </>
  )
};

export default Profile;
