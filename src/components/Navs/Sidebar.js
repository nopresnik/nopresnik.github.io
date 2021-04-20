import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <div className="col-md-2 d-none d-md-block px-0 position-fixed">
    <div className="nav vh-100 d-flex flex-column justify-content-center align-items-center">
      <img
        src="./assets/img/profile.jpeg"
        className="rounded-circle img-fluid p-2"
        alt=""
        style={{ maxWidth: "75%" }}
      />
      <ul className="nav-links mt-2 text-uppercase">
        <li>
          <NavLink exact={true} activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/portfolio">
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
