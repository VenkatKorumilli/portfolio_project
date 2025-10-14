import React from 'react';

const Contact = ({ isMobile }) => (
  <div
    className="container"
    style={{
      marginLeft: isMobile ? "0" : "270px",
      padding: isMobile ? "20px 10px" : "40px 30px",
      minHeight: "100vh",
      maxWidth: "1000px",
    }}
  >
    <h2 className={`fw-bold mb-4 ${isMobile ? "text-start ms-4" : "text-start"}`}>Contact</h2>

    <div className="row g-4">
      {/* Profile Card */}
      <div className="col-12 col-md-5">
        <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title fw-bold mb-3">Venkat</h5>
            <p className="mb-2"><strong>Phone: </strong>+91-9908166547</p>
            <p className="mb-2"><strong>Email: </strong>venkat.korumilli27@gmail.com</p>
            <div className="mb-2">
              <strong>Connect:</strong>
              <div className="mt-2 d-flex align-items-center">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="me-3 text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
                <a
                  href="https://github.com/yourprofile"
                  className="me-3 text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github fs-3"></i>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  className="text-info"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-12 col-md-7">
        <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
          <div className="card-body">
            <h5 className="card-title mb-3 fw-bold">Contact Form</h5>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="number">Number</label>
                <input type="text" className="form-control" id="number" placeholder="Your Number" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <button type="submit" className="btn btn-primary rounded-pill px-4">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
