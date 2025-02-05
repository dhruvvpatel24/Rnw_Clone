function Footer() {
  return (
    <>
      {/* width="100%" */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div class="d-flex justify-content-center">
            <img src="rnw-1.png" alt="Red & White Logo" class="w-25 mb-4" />
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                Red and White Institute is a premier learning hub in Ahmedabad,
                Maninagar, offering advanced courses to empower your future.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                Address: Maninagar, Ahmedabad
                <br />
                Phone: +91 9876543210
                <br />
                Email: info@redandwhiteinstitute.com
              </p>
            </div>
          </div>
          <div className="text-center py-3 border-top mt-3">
            <p className="mb-0">
              &copy; Red & White Institute. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
