import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className='navbar'>
        <div className='navbar__links'>
          <Link to="/about">About site</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
     );
}

export default Navbar;