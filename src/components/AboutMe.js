import React, { Component } from "react";

const aboutMe = () => {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <ul>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>
                          Hi! <br />
                          I'm Reaz
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <ul>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>I am an Engineer</h1>

                        <p>
                          <a className="btn btn-primary btn-learn">
                            View Portfolio <em className="icon-briefcase3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default aboutMe;
