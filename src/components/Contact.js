import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading">Let's Get In Touch!</h2>
            <hr className="primary" />
            <p>
              Ready to start your next project with us? That's great! Give us a
              call or send us an email and we will get back to you as soon as
              possible!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x sr-contact" />
            <p>+8801757323319</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x sr-contact" />
            <p>
              <a href="mailto:info@theschoolify.com">
                info@theschoolify.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
