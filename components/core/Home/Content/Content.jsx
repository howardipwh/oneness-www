import React from 'react';

import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Link from 'next/link';
import Accordion from './Accordion';

export default function Content({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection ${
          dark ? 'bg-dark-2 ' : 'bg-dark-1'
        }  light-content`}
        id="about"
      >
        {dark || eadge2 ? <></> : <div className="edge-top-figure-1" />}
        {/* Env Round Edge */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn"
                data-splitting="lines"
              >
                <h2 className="section-title-inline-1">About us</h2>
                Oneness Design&Build is a Hong Kong based contractor firm
                specialises in fitting-out works + design and statuory
                submissions. We work with the best vendor in town to provide the
                best services.
              </div>
              {/* Accordion */}
              <Accordion />
              {/* End Accordion */}
              <div className="local-scroll text-center">
                {onePage ? (
                  <>
                    <a
                      href="#services"
                      className="btn btn-mod btn-w btn-ellipse"
                      data-btn-animate="ellipse"
                    >
                      <span className="btn-ellipse-inner">
                        <span className="btn-ellipse-unhovered">
                          Learn more{' '}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="btn-ellipse-hovered"
                          aria-hidden="true"
                        >
                          Learn more{' '}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-about${dark ? '-dark' : ''}`}
                      className="btn btn-mod btn-w btn-ellipse"
                      data-btn-animate="ellipse"
                    >
                      <span className="btn-ellipse-inner">
                        <span className="btn-ellipse-unhovered">
                          Learn more{' '}
                          <span className="visually-hidden">about us</span>
                        </span>
                        <span
                          className="btn-ellipse-hovered"
                          aria-hidden="true"
                        >
                          Learn more{' '}
                          <span className="visually-hidden">about us</span>
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark ? 'bg-dark-1 light-content' : ''
        } `}
        id="services"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Services
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#portfolio"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See projects{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See projects{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-services${dark ? '-dark' : ''}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See all services{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See all services{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? 'white opacity-1' : 'black'}  mt-3 mb-0`}
            />
          </div>
          {/* Services Grid */}
          <Service />
          {/* End Services Grid */}
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <hr
                className={` ${dark ? 'white opacity-1' : 'black'}  mt-0 mb-20`}
              />

              <div className="row">
                <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-20">
                  <p className="section-descr mb-0 black">
                    We use the power of design to solve complex problems and
                    cultivate business solutions.
                  </p>
                </div>
                <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className={`btn btn-mod ${
                          dark ? 'btn-border-w' : 'btn-border'
                        }  btn-medium btn-circle`}
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Get a proposal
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Get a proposal
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/modern-contact${dark ? '-dark' : ''}`}
                        className="btn btn-mod btn-border btn-medium btn-circle"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Get a proposal
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Get a proposal
                          </span>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  pt-0 pb-0  ${
          dark ? 'bg-dark-1 light-content' : ''
        } `}
        id="portfolio"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Portfolio
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Start a project{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Start a project{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-portfolio${dark ? '-dark' : ''}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        See all project{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        See all project{' '}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? 'white opacity-1' : 'black'}  mt-3 mb-0`}
            />
          </div>
          <div className="row">
            <div className="col-10 col-sm-9">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Selected </span>
                <span className="d-block text-end wow fadeRotateIn">
                  {' '}
                  Works{' '}
                </span>
              </h3>
            </div>
          </div>
          <Portfolio />
          {/* End Portfolio Grid */}
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? 'bg-dark-1 light-content' : ''
        } `}
        id="contact"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">Contact</h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {/* Change the email address in the href attribute */}
                <a
                  href="mailto:ibthemes21@gmail.com"
                  className="link-hover-anim align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Say hi{' '}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Say hi{' '}
                    <i
                      className="icon-arrow-right2 size-14"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
            <hr
              className={` ${dark ? 'white opacity-1' : 'black'}  mt-3 mb-0`}
            />
          </div>
          <div className="row">
            <div className="col-11 col-sm-10">
              <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Let’s Work </span>
                <span className="d-block text-end wow fadeRotateIn">
                  Together
                </span>
              </h3>
            </div>
          </div>

          <Contact />
        </div>
      </section>
    </>
  );
}
