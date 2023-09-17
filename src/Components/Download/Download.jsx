import React from "react";
import Img1 from "../../assests/download/appstore.svg";
import Img2 from "../../assests/download/googleapp.svg";
import "./style.scss";

const Download = () => {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most of it</h2>
            <p>
              Thrown shy denote ten ladies through ask saw. Or by to he going
              think order event music. Incommode so intention defection at
              convinced. Led income months itself and houses you.
            </p>

            <div className="download-text__btns">
              <img alt="download_img" src={Img1} />
              <img alt="download_img" src={Img2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
