// HomePage.js
import React from 'react';
import './HomePage.css';
import image from './image.jpg'

const HomePage = () => {
  return (
    <div className="home-page">
      
      <div className="image-section">
        <img src={image} alt="Business" />
      </div>
      <div className="text-section">
        <h1>We are happy to have you join our online community!</h1>
        <strong>Dream.Plan.Create.</strong>
      </div>
      <div className="link-form-section">
        <a href="#####">Contact Us Today!</a>
      </div>

    
      <div className="registration-section">
        <p>Register for Our Newsletters:</p>
        <input type="email" />
        <button>Submit</button>
      </div>

     
      <div className="footer-section">
        <table border="1">
          <thead>
            <tr>
              <th>About</th>
              <th>Our Vision</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>We Are IT Base Company</td>
              <td>Expand Our Business in Other Countries</td>
              <td>We Provide App And Website For Startups</td>
            </tr>
            <tr>
              <td>We have a Very Good Work Culture.</td>
              <td>Explore more fields</td>
              <td>We provide a Team of Developers to build customized Apps</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
