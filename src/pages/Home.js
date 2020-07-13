/* eslint-disable */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../about.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div id='aboutHeader'>
          <h1>Jeremiah Huerta</h1>
          <a id='homePageLink' href='/'>
            Home
          </a>
          <a id='aboutPageLink' href='/about'>
            About
          </a>
          <a id='portfolioPageLink' href='portfolio'>
            Portfolio
          </a>
          <a id='contactPageLink' href='/contact'>
            Contact
          </a>
        </div>

        <div>
          <div class='container'>
            <section id='full2'>
              <h5>About Me</h5>

              <hr />

              <img src='200x200' alt='Me' height='200' width='200' />

              <div class='a'>
                <p id='aboutStatement'>
                  My name is Jeremiah Huerta. I'am currently a part-time student
                  and a full-time worker doing construction. Studying full scale
                  web development, I plan on changing my career somehwere in
                  that field. I find myself to be a creative problem solver, who
                  takes interest in new challenges. Whether that being improving
                  my status or taking on new skills, I know web development is a
                  right fit for me.
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
