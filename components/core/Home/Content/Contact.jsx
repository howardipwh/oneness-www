'use client';
import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 mb-sm-60">
          <div className="section-descr black text-center">
            <p>
              {/* Change the phone number inside and link tag and href attribute */}
              <a href="tel:+85266278722" className="text-link">
                +852 6627 8722
              </a>
              <br />
              {/* Change the email address inside and link tag and href attribute */}
              <a
                href="mailto:info@onenessdesignandbuild.com"
                className="text-link"
              >
                info@onenessdesignandbuild.com
              </a>
            </p>
            <p>
              <strong>Hong Kong</strong>
            </p>
            <div>
              {/* <a href="#" className="hs-social-link d-inline-flex me-1">
                <span className="visually-hidden">Facebook</span>
                <i className="fa-facebook-f" />
              </a>
              <a href="#" className="hs-social-link d-inline-flex me-1">
                <span className="visually-hidden">Twitter</span>
                <i className="fa-twitter" />
              </a> */}
              <a
                href="https://www.instagram.com/onenessdesignandbuild"
                className="hs-social-link d-inline-flex"
              >
                <span className="visually-hidden">Instagram</span>
                <i className="fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
