import './Navbar.css';
import logoImg from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo-link">
          <img src={logoImg} alt="Planet Facts" className="logo-img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;