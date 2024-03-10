import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const SocialButton = (props) => {
 
  return (
    <div className="m-3 d-flex justify-content-center">
      <div className='rounded-circle fs-2 m-2 px-2 border border-dark'>
        <a href="#"><FontAwesomeIcon icon={props.facebook} /></a>
      </div>
      <div className='rounded-circle fs-2 m-2 px-2 border-dark border border-dark'>
        <a href="#"><FontAwesomeIcon icon={props.github} /></a>
      </div>
      <div className='rounded-circle fs-2 m-2 px-2 border-dark border border-dark'>
        <a href="#"><FontAwesomeIcon icon={props.instagram} /></a>
      </div>
    </div>
  );
}

export default SocialButton;
