function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <img
            src="logo.png"
            alt="Red and White Institute"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />

          <a className="navbar-brand text-danger fw-bold mx-3  d-xl-block d-none" href="#">
            Red & White Institute
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.rnwmultimedia.edu.in/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STD 10th & 12th
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      GIM (Graduate In Multimedia)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Animation & VFX 2 year
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Career Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Digital Marketing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Video Editing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Short Term
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Frontend Coading
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Foundation Courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Project Training
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Group of institutes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Career With Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Affiliations / Authorised
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Press Notes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="coursesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student Corner
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Apply job
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Placement
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2" href="#">
                      Company Visit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Expert Session
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Placement Drive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Grievance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Why I Choose RNW
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Placement Partners
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item mt-2 mb-2" href="#">
                      Student Works
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
