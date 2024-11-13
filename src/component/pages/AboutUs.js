import React from "react";
import "../css/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assets from "../assets/Assets";
import SliderComponent from "../com/SliderComponent";
const images =[Assets.GroupImg,Assets.LaptopUse,Assets.passPort]
function AboutUs() {
  return (
    <div>
      {/* <header className="hero text-center text-white">
        <div className=" d-flex justify-content-center align-items-center">
          <h1>About Us</h1>
        </div>
      </header> */}
      <SliderComponent images={images}/>
      <section className="stats-section text-center my-5">
        <div>
          <div className="row">
            <div className="col-md-4 d-flex flex-column align-items-center pt-5 mt-3">
              <h1>20.5k</h1>
              <p>Successfully Trained</p>
              <h1>450+</h1>
              <p>Students Community</p>
              <h1>20.5k</h1>
              <p>Successfully Trained</p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src={Assets.LaptopUse}
                alt="Loading...."
                className="img-fluid "
              />
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center mt-5">
              <h1>Creative agency and their best solutions</h1>
              <p>Ultrices gravida dictum fusce ut placerat orci nulla</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero-section text-white py-5"
        style={{ backgroundColor: "15A3EF" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex flex-column align-items-center custom-gap">
              <h1 className="text-start">
                Create an Effective Web Interior Design
              </h1>
              <p className="text-start">
                You can accept or decline this invitation. You can also head
                over to https://github.com/Leadsensegithub/hanish to check out
                the repository or visit @Leadsensegithub to learn a bit more
                about them.
              </p>
              <button className="btn btn-primary mr-5">Contact us</button>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between">
                <p>These Causes are perfectly simple.</p>
                <button className="ml-5">Arrow</button>
              </div>
              <hr></hr>
              <div className="d-flex justify-content">
                <p>These Causes are perfectly simple.</p>
                <button className="ml-5">Arrow</button>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <p>These Causes are perfectly simple.</p>
                <button className="ml-5">Arrow</button>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <p>These Causes are perfectly simple.</p>
                <button className="ml-5">Arrow</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section my-5">
        {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qgZsZerFek8?si=ny0vLTr5TkENhiRK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        <div className="container">
          <h1 className="text-center mb-4">
            Our awarded speakers & Team mentors
          </h1>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>John Doe</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid "
              />
              <h5>Jane Doe</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>John Smith</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>Jane Smith</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>John Doe</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid "
              />
              <h5>Jane Doe</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>John Smith</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <img
                src={Assets.passPort}
                alt="team member"
                className="img-fluid"
              />
              <h5>Jane Smith</h5>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>amco.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Information</h5>
              <p>123 Franklin Street, Montgomery, AL, 36104</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
