import React from 'react';
import {Link} from 'react-router-dom';
 
function Navi()
{
    return(
        <div>
           
           <nav className="navbar navbar-dark bg-dark">
            <ul className="justify-content-center">
                <Link to='/About' className="badge badge-danger">About
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
                <Link to='/Contacts' className="badge badge-danger">Contacts
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
                
                <Link to='/Topics' className="badge badge-danger">Topics
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
                <Link to='/app' className="badge badge-danger">Home
                 </Link>
                
                {/* <Link to='/login' >Login
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
 
                </ul>
            </nav>
        </div>
    );
}
export default Navi;