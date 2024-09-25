import React from 'react';


export default function Contact() {
  return (
    <div>
      {/* Contact Form Start */}
      <div className="container my-5">
      <h2 className="text-dark mb-4 display-5" style={{ textAlign: 'center' }}>Contact Us</h2>
      <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      {/* Contact Form End */}
    </div>
  );
}
