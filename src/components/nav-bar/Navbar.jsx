import { Link } from 'react-router-dom';
import './Navbar.css'

export function Navbar() {
    return (
      <nav className="navigate-wrapper ">
        <Link to="/" className='link'>Add Box</Link>
        <Link to="/list" className='link'>List Boxes</Link>
      </nav>
    );
}
