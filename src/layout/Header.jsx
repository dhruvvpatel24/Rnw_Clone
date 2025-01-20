function Header() {
  return (
    

    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand d-flex " href="#">
            <img
              src="logo.png"
              alt="Red and White Institute"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
           <h4 class="ms-2">Red & White </h4> 
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
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
