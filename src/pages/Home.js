import React from "react";
import picture1 from "../images/consulting.jpg";
import picture2 from "../images/development.jpg";
import picture3 from "../images/marketing.jpg";

function Home() {
  return (
    <div className="container-fluid container">
      <div className="slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={picture1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={picture2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={picture3} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div>
        <form action="/">
          <ul>
            <li>
              <label>Name:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label>E-mail:</label>
              <input type="text" id="mail" name="user_email" />
            </li>
            <li>
              <label>Message:</label>
              <textarea id="msg" name="user_message"></textarea>
            </li>
            <li className="button">
              <button
                className="button-8"
                onClick={() => {
                  alert("Mesajınız Gönderildi");
                }}
              >
                Send your message
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Home;
