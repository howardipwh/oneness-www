import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pb-sm-60 text-start position-relative">
        <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span
            className="d-block text-center wow fadeRotateIn"
            style={{ color: '#CDFF00' }}
          >
            Oneness
          </span>
          <span
            className="d-block wow fadeRotateIn"
            data-wow-delay="0.2s"
            data-wow-offset={0}
            style={{ color: '#CDFF00' }}
          >
            Design &
          </span>
          <span
            className="d-block text-center wow fadeRotateIn"
            data-wow-delay="0.4s"
            data-wow-offset={0}
            style={{ color: '#CDFF00' }}
          >
            Build
          </span>
        </h1>
        <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Specialized in Design, Build and Construction Consultant
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          We are a Hong Kong based contractor firm specialises in fitting-out
          works + design and statuory submissions.
        </p>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down-white.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
        <a
          href="https://www.instagram.com/onenessdesignandbuild?igsh=eHFveTMyY3F0bzNv"
          target="_blank"
          className="hs-social-link"
        >
          <span className="visually-hidden">Instagram</span>
          <i className="fa-instagram" />
        </a>
        {/* <a href="#" className="hs-social-link">
          <span className="visually-hidden">Twitter</span>
          <i className="fa-twitter" />
        </a>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Facebook</span>
          <i className="fa-facebook-f" />
        </a> */}
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
