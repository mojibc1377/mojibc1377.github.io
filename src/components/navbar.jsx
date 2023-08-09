import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Navbar(){

    return(
            <nav className="nav mb-3" >
                <ul id="list">
                    
                    <CustomLink to='/about'>About</CustomLink>

                    <CustomLink to='/intrest'>Intrests</CustomLink>

                    <CustomLink to='/study'>Studies</CustomLink>

                    <CustomLink to='/certificate'>Certificates</CustomLink>
                    
                    <CustomLink to='/badge'>Badges</CustomLink>

                    <CustomLink to='/pdfresume'>PDF</CustomLink>


                </ul>
            </nav>
    )
    
}
function CustomLink({to, children,  ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} > {children} </Link>
        </li>
    )
}

export default Navbar;