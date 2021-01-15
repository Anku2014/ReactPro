import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(prop) {
    return(
      <div className='Header'>
          <h2>{prop.text}</h2> 
     </div>

    )
}

export default Header;