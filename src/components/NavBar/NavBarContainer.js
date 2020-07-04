import React from 'react';
import { NavBarComponent } from './NavBarComponent';

function NavBarContainer(props) {
    return <NavBarComponent  { ...props }/>
}

export { NavBarContainer as NavBar };