// import React,{useState} from 'react'
// import { NavLink ,Link } from 'react-router-dom'

// const Header = () => {
//   const[auth,setAuth]=useState()
//   const handleLogout=()=>{
//     setAuth({
//       ...auth,
//       user:null,
//       token:"",
//     })
//     localStorage.removeItem("auth")
//   }
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <Link to="/" className="navbar-brand" > Ecommerce App</Link>
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink to="/" className="nav-link " >Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/category" className="nav-link " >Category</NavLink>
//         </li>
//         {
//           !auth.user ? (
//             <>
//             <li className="nav-item">
//           <NavLink to="/register" className="nav-link" href="#">SignUp</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
//         </li>
//             </>
//           ) :(
//             <>
//             <li className="nav-item">
//           <NavLink to="/login" onClick={handleLogout}className="nav-link" >Logout</NavLink>
//         </li>
//             </>
//           )
//         }
//         <li className="nav-item">
//           <NavLink to="/cart" className="nav-link" href="#">Cart</NavLink>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

//     </>
//   )
// }

// export default Header


import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  // Initialize auth state
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : { user: null, token: "" };
  });

  // Logout handler
  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully!");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Ecommerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
