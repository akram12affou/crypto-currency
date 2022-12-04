import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <Link to="/">
     <button>Home</button>
     </Link>
     <Link to="/news">
     <button>News</button>
     </Link>
     <button>About Us</button>
     <button>Dark Mode</button>
    </nav>
  )
}

export default Navbar