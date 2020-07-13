/* eslint-disable no-undef */
import React, { Component } from "react";
import "../homePage.css";

class homePage extends Component {
  componentDidMount() {
    $(".colu-1").hover(function() {
      $(".colu-1").css("background-color", "black");
      $("#aboutHoverBox")
        .css("visibility", "visible")
        .hover(function() {
          $(".colu-1").css("background-color", "black");
        })
        .mouseleave(function() {
          $("#aboutHoverBox").css("visibility", "hidden");
          $(".colu-1").css("background-color", "inherit");
        });
      $("#portfolioHoverBox").css("visibility", "hidden");
      $("#contactHoverBox").css("visibility", "hidden");
      $(".colu-1").mouseleave(function() {
        $(".colu-1").css("background-color", "inherit");
      });
    });

    $(".colu-2").hover(function() {
      $(".colu-2").css("background-color", "black");
      $("#aboutHoverBox").css("visibility", "hidden");
      $("#portfolioHoverBox")
        .hover(function() {
          $(".colu-2").css("background-color", "black");
        })
        .css("visibility", "visible")
        .mouseleave(function() {
          $("#portfolioHoverBox").css("visibility", "hidden");
          $(".colu-2").css("background-color", "inherit");
        });
      $("#contactHoverBox").css("visibility", "hidden");
      $(".colu-2").mouseleave(function() {
        $(".colu-2").css("background-color", "inherit");
      });
    });

    $(".colu-3").hover(function() {
      $(".colu-3").css("background-color", "black");
      $("#aboutHoverBox").css("visibility", "hidden");
      $("#portfolioHoverBox").css("visibility", "hidden");
      $("#contactHoverBox")
        .hover(function() {
          $(".colu-3").css("background-color", "black");
        })
        .css("visibility", "visible")
        .mouseleave(function() {
          $("#contactHoverBox").css("visibility", "hidden");
          $(".colu-3").css("background-color", "inherit");
        });
      $(".colu-3").mouseleave(function() {
        $(".colu-3").css("background-color", "inherit");
      });
    });

    $("#homeHeader").hover(function() {
      $("#aboutHoverBox").css("visibility", "hidden");
      $("#portfolioHoverBox").css("visibility", "hidden");
      $("#contactHoverBox").css("visibility", "hidden");
    });
  }
  render() {
    return (
      <div>
        <div id='homeHeader'>
          <h1>Jeremiah Huerta</h1>
        </div>

        <div className='colu-1'>
          <h2>ABOUT</h2>
        </div>
        <div className='colu-2'>
          <h3>PORTFOLIO</h3>
        </div>

        <div className='colu-3'>
          <h4>CONTACT</h4>
        </div>

        <div id='aboutHoverBox'>
          <i id='icons' className='fa fa-address-card-o' aria-hidden='true' />
          <p className='homeP'>Click below to find out more about me!</p>
          <div id='link'>
            <a href='/about'>Click Here</a>
          </div>
        </div>

        <div id='portfolioHoverBox'>
          <i id='icons' className='fa fa-line-chart' aria-hidden='true' />
          <p className='homeP'>
            See some of my work and experience you may find interesting!
          </p>
          <div id='link'>
            <a href='/portfolio'>My Portfolio</a>
          </div>
        </div>

        <div id='contactHoverBox'>
          <i id='icons' className='fa fa-handshake-o' aria-hidden='true' />
          <p className='homeP'>
            Like what you see and want to find out more? Feel free to click
            below and get into contact with me!
          </p>
          <div id='link'>
            <a href='/contact'>Contact Me</a>
          </div>
        </div>
      </div>
    );
  }
}

export default homePage;
