import React from 'react';

export default function Footer() {
  return (
    <div className="ui vertical footer segment">
      <div className="ui section divider"></div>
      <div className="ui center aligned container">
        <div className="ui stackable grid">
          <div className="three wide column">
            <h4 className="ui header">Projects</h4>
            <div className="ui link list">
              <a
                className="item"
                href="https://devjobs-io.web.app/"
                target="blank"
              >
                Developer Jobs
              </a>
              <a
                className="item"
                href="https://gatsby-woocommerce-temp.netlify.app/products/"
                target="blank"
              >
                Gatsby/woocommerce
              </a>
              <a
                className="item"
                href="https://gatsby-contentful-template.netlify.app/products"
                target="blank"
              >
                Gatsby/Contentful
              </a>
              <a
                className="item"
                href="https://sleepy-ptolemy-900db9.netlify.app/"
                target="blank"
              >
                Movie app
              </a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui header">Connect</h4>
            <div className="ui link list">
              <a className="item" href="https://www.facebook.com/ewebdesigns/">
                facebook
              </a>

              <a className="item" href="https://allenpavic.ga" target="blank">
                Allen Pavic
              </a>
              <a
                className="item"
                href="https://github.com/alvic"
                target="blank"
              >
                GitHub Repo
              </a>

              <a className="item" href="https://ewebdesigns.com.au">
                eWebDesign
              </a>
            </div>
          </div>
          <div className="seven wide right floated column">
            <h4 className="ui header">This Project created by Allen Pavic</h4>
            <p>
              Free and open source image search pics app, tech used unsplash api
              react, firebase hosting and semantic ui.
            </p>

            <button type="submit" className="ui large teal button">
              <a style={{ color: '#fff' }} href="mailto:apavic71@gmail.com.com">
                Contact me
              </a>
            </button>
          </div>
        </div>
        <div className="ui section divider"></div>
        <img
          src="https://res.cloudinary.com/ewebdesigns/image/upload/v1588895661/ewdlogo_dvtxvw.png"
          className="ui centered mini image"
          alt="logo"
        />
        <div className="ui horizontal small divided link list">
          <a className="item" href="https://github.com/alvics" target="_blank">
            Free & Open Source (MIT)
          </a>
        </div>
      </div>
    </div>
  );
}
