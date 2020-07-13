import React, { Component } from "react";

import "../contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div id='contactHeader'>
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

        <div id='container2'>
          <h2>Contact</h2>
          <hr />
          <form action='/action_page.php'>
            Name: <input type='text' name='Name' value='' />
          </form>
          <form action='/action_page.php'>
            Email: <input type='text' class='email' name='Email' value='' />
          </form>

          <label for='message'>Message:</label>
          <textarea id='message' rows='8' cols='50'></textarea>
          <br />
          <input type='submit' value='Submit' />
        </div>
      </div>
    );
  }
}

export default Contact;
