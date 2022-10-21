import React from 'react';
import NavButton from './NavButton/NavButton';
import ListaHead from './ListaHead/ListaHead';
const Navbar = () => {
    return (
            <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavButton />
          <div className="collapse navbar-collapse" id="navbarNav">
           <ListaHead />
          </div>
        </div>
      </nav>
        </>
    );
}

export default Navbar;
