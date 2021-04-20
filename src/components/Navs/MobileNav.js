import { NavLink } from "react-router-dom";

const MobileNav = () => (
  <div className="row nav fixed-top d-md-none">
    <div className="col-12">
      <ul className="nav-links d-flex justify-content-around align-items-center mt-2 text-uppercase">
        <li>
          <img
            src="/assets/img/profile.jpeg"
            className="rounded-circle img-fluid p-2"
            alt=""
            style={{ maxWwidth: "72px" }}
          />
        </li>

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

export default MobileNav;
