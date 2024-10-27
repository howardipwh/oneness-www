import React from 'react';

export const socialLinks = [
  {
    href: 'https://www.instagram.com/onenessdesignandbuild',
    text: 'Instagram',
    icon: 'fa-instagram',
  },
];

export default function Footer() {
  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            <div className="clearlinks">
              <strong>T.</strong>
              <a href="tel:+85266278722">+852 6627 8722</a>
            </div>
            <div className="clearlinks">
              <strong>E.</strong>
              <a href="mailto:info@onenessdesignandbuild.com">
                info@onenessdesignandbuild.com
              </a>
            </div>

            {socialLinks.map((elm, i) => (
              <div
                key={i}
                className="fw-social-inline-item d-flex align-items-center gap-2"
              >
                <i className={elm.icon} />
                <a
                  href={elm.href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{elm.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {elm.text}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="col-lg-6 fw-social-inline text-center mb-md-40"></div>

          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="footer-text text-center mt-n10 pb-50">
        © {new Date().getFullYear()} Oneness Design And Build Limited. All
        rights reserved.
      </div>
      {/* End Footer Text */}
    </div>
  );
}
