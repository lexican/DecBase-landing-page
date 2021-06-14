import React, { Component } from "react";
import Navbar from "../components/Navbar";

import Logo from "../assets/images/logo.svg";

import ServiceCardList from "../components/ServiceCardList";
import TestimonialCardList from "../components/TestimonialCardList";

import { FacebookLogo } from "../components/svgs/FacebookLogo";
import { TwitterLogo } from "../components/svgs/TwitterLogo";
import { InstagramLogo } from "../components/svgs/InstagramLogo";
import { LinkedInLogo } from "../components/svgs/LinkedInLogo";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="banner">
          <div className="d-flex align-items-center">
            <div className="left">
              <h4 className="title">MODERN INTERIOR</h4>
              <h2 className="title">Create Your</h2>
              <h2 className="text mb-3">Interior Design.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <button className="btn special-btn mt-4">CONTACT</button>
            </div>
            <div className="right">
              <div id="banner-image"></div>
            </div>
          </div>
        </div>
        <section id="section-1">
          <div>
            <p className="title-sm text-center">WHAT WE DO</p>
            <p className="title-md text-center">Our Service</p>
          </div>
          <div className="">
            <ServiceCardList />
          </div>
        </section>

        <section id="section-2">
          <div className="d-flex align-items-center">
            <div className="left">
              <div id="banner-image-1"></div>
            </div>
            <div className="right">
              <h4 className="title">ABOUT US</h4>
              <h2 className="title">Create Your</h2>
              <h2>Interior Design.</h2>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <button className="btn special-btn mt-3">Learn More</button>
            </div>
          </div>
        </section>

        <section id="section-3">
          <div className="d-flex align-items-center">
            <div className="left">
              <h1>20</h1>
              <h2>Years Of Successful Working The Market</h2>
              <button className="btn special-btn mt-3">Read More</button>
            </div>
            <div className="right">
              <div id="banner-image-1"></div>
            </div>
          </div>
        </section>

        <section id="section-4">
          <h4 className="text-center">3000+ Completed Work</h4>
          <h4 className="text-center">Which WE have Successfully Done</h4>
          <div className="d-flex justify-content-between inner-container">
            <div className="card">
              <div>
                <h2>980</h2>
                <h4>Project</h4>
              </div>
            </div>
            <div className="card">
              <div>
                <h2>520</h2>
                <h4>Happy Client</h4>
              </div>
            </div>
            <div className="card">
              <div>
                <h2>330</h2>
                <h4>Winners</h4>
              </div>
            </div>
            <div className="card">
              <div>
                <h2>120</h2>
                <h4>Recomment</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="section-5">
          <h4 className="title text-center">TESTIMONIALS</h4>
          <h2 className="title text-center">Client says about us</h2>
          <div className="my-4">
            <TestimonialCardList />
          </div>
        </section>

        <section id="section-7">
          <h4 className="title text-center">LATEST NEWS</h4>
          <h2 className="title text-center">From our blog</h2>
          <div className="d-flex my-4 justify-content-center">
            <div className="card">
              <div className="card-img">
                <div className="img"></div>
              </div>
              <div className="my-4">
                <p className="card-title">2020 Interior Design Trends</p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn special-btn mt-3">
                  Continue Reading...
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <div className="img"></div>
              </div>
              <div className="my-4">
                <p className="card-title">2020 Interior Design Trends</p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn special-btn mt-3">
                  Continue Reading...
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="section-6">
          <h2 className="title">DON’T FORGET TO SIGN UP</h2>
          <p className="text">
            Find out early about all upcoming promotions and new product
            releases with our newsletter.
          </p>

          <form className="form-inline">
            <div className="form-group mb-2">
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn mb-2">
              Subscribe
            </button>
          </form>
        </section>

        <section className="footer">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src={Logo} alt="logo" className="mb-4"></img>
              <p>
                But i must explain to you all this mistaken idea of dencouncing
                pleasure.
              </p>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Quick Links</h4>
              <p>About Our Company</p>
              <p>Services WE provide</p>
              <p>Career & Opportunity</p>
              <p>Privacy & policy</p>
              <p>Contact US</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Company</h4>
              <p>About Company</p>
              <p>Our Testimonials</p>
              <p>Latest News</p>
              <p>Our misson</p>
              <p>Get a free Quot</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Contact us</h4>
              <p>Sagrada Familia, Herba</p>
              <p>Herba Street Front USA</p>
              <p>brandoxide@gmail.com</p>
              <p>002-568423591</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Follow Us</h4>
              <div className="d-flex">
                <FacebookLogo />
                <TwitterLogo />
                <InstagramLogo />
                <LinkedInLogo />
              </div>
            </div>
          </div>
        </section>
        <div className="copyright">
          <p className="text-center">
            <span className="mr-1">Created by</span>
            <a
              href="https://github.com/lexican"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adeyemo adekunle
            </a>
          </p>
        </div>
      </div>
    );
  }
}
