import { NavbarData } from "../lib/NavbarData";
import Button from "../misc/Button";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary padding-container mt-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          zenith
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="mx-auto d-none d-lg-block"></div>
          <div className=" d-none d-xxl-block">
            <Button comp="primary" text="Our investment in freshsound - an investm..." />
          </div>

          <ul className=" text-start navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
            {NavbarData.map(({ id, name }) => (
              <li key={id} className="nav-item">
                <a className="nav-link" href="#">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
