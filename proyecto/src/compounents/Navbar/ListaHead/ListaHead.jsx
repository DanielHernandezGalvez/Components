import React from 'react';

const ListaHead = () => {
    return (
        <>
             <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Pricing</a>
              </li>
            </ul>
        </>
    );
}

export default ListaHead;
