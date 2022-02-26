import React from 'react';

const MasterHead = () => {
    return (
      <header className="masthead">
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading">Remote. Office not required.</h1>
            <hr />
            <p>Work remotely, from any space, from any place, anytime, anywhere!</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </header>
    )
};

export default MasterHead;