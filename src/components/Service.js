import React from 'react';

const Service = () => {
    return ( 
        <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">At Your Service</h2>
              <hr className="primary" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-laptop text-primary sr-icons"></i>
                <h3>Machine Learning</h3>
                <p className="text-muted">Our expert machine learning team is ready to build your next app</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                <h3>Web Application</h3>
                <p className="text-muted">We've highly expert team for web development!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                <h3>Blockchain</h3>
                <p className="text-muted">We love blockchain. Let's build somehing new.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-mobile text-primary sr-icons"></i>
                <h3>Mobile Application</h3>
                <p className="text-muted">Our mobile apps are just amazing!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Service;