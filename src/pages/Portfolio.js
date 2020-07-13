import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../portfolio.css";
class Portfolio extends Component {
  render() {
    return (
      <div>
        <div id='portHeader'>
          <h1>Jeremiah Huerta</h1>
          <a id='homePageLink' href='/'>
            Home
          </a>
          <a id='aboutPageLink' href='/about'>
            About
          </a>
          <a id='portfolioPageLink' href='/portfolio'>
            Portfolio
          </a>
          <a id='contactPageLink' href='/contact'>
            Contact
          </a>
        </div>

        <section id='full3'>
          <h6>Portfolio </h6>

          <hr />

          <div>
            <p id='portP'>
              Working within a team is a fun and learning experience. Here are
              two projects I worked on with a few of my classmates.
              <a href='https://github.com/TwistedNeon/Group-Project-1'>
                Group Project 1
              </a>
              <a href='https://github.com/ucr-the-boyz/group-project-2.github.io'>
                Group Project 2
              </a>
            </p>
            <p id='portP'>
              Javascript is the root of my skills. In my password generator
              project, I use Javascript to provide a user with an unique
              password based on a few selections.
              <a href='https://github.com/jeremivh123/password-gen'>
                Password Generator
              </a>
            </p>
            <p id='portP'>
              Working with APIs is something I also have practice in. In my{" "}
              <a href='https://github.com/jeremivh123/weatherapp.github.io'>
                Weather App
              </a>
              project, I pull data from an outside source to use in my app.
            </p>
            <p id='portP'>
              In my{" "}
              <a href='https://github.com/jeremivh123/employeeTracker'>
                Employee Tracker
              </a>
              project, I use node as a server.
            </p>
            <p id='portP'>
              In my{" "}
              <a href='https://github.com/jeremivh123/burger'>Burger App</a>{" "}
              project, I put all my skills together to build a fun and
              interactive application.
            </p>
            <p id='portP'>
              You can visit my <a href='https://github.com/'>github account</a>{" "}
              and explore my projects and or connect with me through{" "}
              <a href='https://www.linkedin.com/in/jeremiah-huerta-28a898197'>
                linkedin
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
