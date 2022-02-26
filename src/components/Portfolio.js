import React from "react";

const Portfolio = () => {
  return (
    <section className="p-0" id="portfolio">
      <div className="container-fluid">
        <div className="row no-gutter popup-gallery">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/1.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Blockchain</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/2.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Education</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/3.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Photography</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/4.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Sales</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/5.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Health</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
              <img
                className="img-fluid"
                src="img/portfolio/thumbnails/6.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">Golf</div>
                  <div className="project-name" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
