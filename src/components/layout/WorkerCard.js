import React from "react";

const WorkerCard = () => {
  return (
    <div className="container">
      <br />
      <h1 style={{ textAlign: "center" }}>Our Team</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="../../../res/youssef.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Youssef Kafa</h1>
                <p>Back End Developer</p>
                <p>skilled with Spring Framework - "His Nickname is Lastok!"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Mohammad Saeed Nahlous</h1>
                <p>Front End Developer</p>
                <p>
                  Hardworker with alot of creativity - "he is laughing all the
                  time!"
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>Abdullah Jeero</h1>
                <p>Android Full Stack</p>
                <p>
                  Skilled with Android Studio - "He is always Late for
                  everything!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default WorkerCard;
