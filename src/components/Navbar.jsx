import React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/global.css';

function Navbar(){
    const data= useStaticQuery(graphql`
    query SiteInfo {
        site{
          siteMetadata {
            copyright
            description
            title
          }
        }
      }
    `);

    const {title}=data.site.siteMetadata;
    return(
        <nav>
            <h1>{title}</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects/projects'>Portfolio projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;