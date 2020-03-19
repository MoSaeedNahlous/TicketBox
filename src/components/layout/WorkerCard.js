import React from "react";
import youssef from '../../res/youssef.png'
import aj from '../../res/aj.jpg'
import msn from '../../res/msn.jpg'
import imag from '../../res/bghome.jpg'

const WorkerCard = () => {
  return (
    <div style={{backgroundImage: `url(${imag})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
    <div className="container">
      <br />
      <h1 className='wite' style={{ textAlign: "center",fontSize:'4rem' }}>Our Team</h1>
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="flip-card" >
            <div className="flip-card-inner" >
              <div className="flip-card-front">
                <img
                  src={youssef}
                  alt="Avatar"
                  style={{ width: "100%", height: "100%" }}
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
          <div className="flip-card" >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={msn}
                  alt="Avatar"
                  style={{ width: "100%", height: "100%" }}
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
          <div className="flip-card" >
            <div className="flip-card-inner" >
              <div className="flip-card-front" >
                <img
                  src={aj}
                  alt="Avatar"
                  style={{ width: "100%", height: "100%" }}
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
    </div>
  );
};

export default WorkerCard;
