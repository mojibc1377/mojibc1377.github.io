import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Navbar(){

    return(
            <nav className="nav" >
                <ul id="list">
                    
                    <CustomLink to='/about'>about</CustomLink>

                    <CustomLink to='/intrest'>intrests</CustomLink>

                    <CustomLink to='/study'>studies</CustomLink>

                    <CustomLink to='/certificate'>certificates</CustomLink>
                    
                    <CustomLink to='/badge'>Badges</CustomLink>
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