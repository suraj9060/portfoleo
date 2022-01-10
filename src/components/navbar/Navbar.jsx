import React from "react"


import "./Navbar.css"




import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
      
        <div className="n">
            
            <button>Home</button>
            <button>About</button>
            <button>Project</button>
            <button>Contact</button>
        </div >
          
    )
}

export default Navbar


//   <Toggle />
//         <Intro />
//         <About />
//         <ProductList />
//         <Contact />