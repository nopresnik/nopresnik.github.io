const Landing = () => {
  return (
    <section
      id="landing"
      className="d-flex vh-100 flex-column justify-content-center px-5 text-light"
    >
      <h1 className="display-3 mb-n1">Nathan Opresnik</h1>
      <p className="lead">Melbourne based full-stack software developer.</p>
      <div className="d-flex social-links">
        <a
          className="text-reset"
          href="https://www.linkedin.com/in/nathan-o-194018102/"
        >
          <i className="bi-linkedin mr-3"></i>
        </a>
        <a className="text-reset" href="https://github.com/nopresnik/">
          <i className="bi-github mr-3"></i>
        </a>
      </div>
    </section>
  );
};

export default Landing;
