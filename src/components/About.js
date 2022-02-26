import React from "react";

const About = () => {
  return (
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">We've got what you need!</h2>
            <hr className="light" />
            <p className="text-faded">
              Schoolify is a privately held web application company based in
              Dhaka. The firm was founded in 2014
            </p>
            <a
              className="btn btn-default btn-xl js-scroll-trigger"
              href="#services"
            >
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
