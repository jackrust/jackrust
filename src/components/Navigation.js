import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div id="navigation-bar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/blog">Blog</NavLink>
       </div>
    );
}

export default Navigation;
