import React from 'react';
import {Link} from 'react-router-dom';

function Navi()
{
    return(
        <div>
           
            <nav className="navbar navbar-dark bg-info">
            <ul className="justify-content-left">
               

                <Link to='/createuser' className="btn btn-primary">Librarian Login
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                <Link to='/registerpage' className="btn btn-primary">Register Page
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                
                

                <Link to='/app' className="btn btn-primary">Home
                </Link>
            </ul>
            </nav>
        </div>
    );
}
export default Navi;