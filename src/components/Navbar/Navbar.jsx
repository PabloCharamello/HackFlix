import "./Navbar.css";
import hackFlixlogo from "../assets/img/hackFlixlogo.png";

const Navbar = () => {
  return (
    <div className="col-md-12">
      <div className="navbar-container">
        <img className="hackFlixLogo" src={hackFlixlogo} alt="" />
        <div className="div-nav-links">
          <ul className="nav-ul">
            <li className="nav-items">
              <a className="nav-links" href="#">
                <span className="Hack-link">Hack</span>FLIX
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links"href="#">
                Contacto
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links"href="#">
                Sobre nostros
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links"href={`/`}>
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
