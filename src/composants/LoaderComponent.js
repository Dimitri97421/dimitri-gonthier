import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const LoaderComponent = () => {
    return (
      <div className='loader-container'>
        <CirclesWithBar
          height="100"
          width="100"
          color="orange"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };
  
  export default LoaderComponent;
  