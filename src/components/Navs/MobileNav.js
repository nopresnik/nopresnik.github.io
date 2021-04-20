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
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/portfolio">My Work</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
);

export default MobileNav;
