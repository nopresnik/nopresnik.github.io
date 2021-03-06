/* eslint-disable react/jsx-no-target-blank */
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="d-flex vh-100 flex-column justify-content-center px-5"
    >
      <h1 className="mt-5">My Work</h1>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="betti demo"
              src="https://github.com/nopresnik/employee-directory/raw/master/image.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text text-truncate">
                A frontend app which loads 150 people from the random user api
                and allows sorting and filtering of the data.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="https://nopresnik.github.io/employee-directory/"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/nopresnik/employee-directory"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="appetite demo"
              src="https://github.com/nopresnik/budget-tracker/raw/master/demo.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Budget Tracker</h5>
              <p className="card-text text-truncate">
                A progressive web app to track transactions. Utilises indexDB
                and a NoSQL (MongoDB) database.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="https://tranquil-beyond-07108.herokuapp.com/"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/nopresnik/budget-tracker"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="weather dashboard demo"
              src="https://github.com/nopresnik/workout-tracker/raw/master/image.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Workout Tracker</h5>
              <p className="card-text text-truncate">
                A simple app to track workouts. Utilises a NoSQL (MongoDB)
                database.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="https://guarded-harbor-89017.herokuapp.com/"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/nopresnik/workout-tracker"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="betti demo"
              src="/assets/img/projects/betti.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Betti</h5>
              <p className="card-text text-truncate">
                A fun site where friends can create bets with each other.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="http://www.bettibet.com/"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/nopresnik/Betti"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="appetite demo"
              src="/assets/img/projects/appetite.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">APPétit</h5>
              <p className="card-text text-truncate">
                APPétit is an app where users, specifically tourists, can search
                for a city and find local cuisines and restaurants.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="https://karryns.github.io/Project_1/"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/KarrynS/Project_1"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img
              alt="weather dashboard demo"
              src="/assets/img/projects/weather-dashboard.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text text-truncate">
                A simple no-frills weather dashboard which provides current
                weather obervations including a 5 day forecast.
              </p>
            </div>
            <div className="btn-group w-100">
              <a
                target="_blank"
                href="https://nopresnik.github.io/weather-dashboard"
                type="button"
                className="btn btn-light"
              >
                View Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/nopresnik/weather-dashboard"
                type="button"
                className="btn btn-light"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
