import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { portfolios, navLinks2 } from '@/data/oneness';

import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';

const ParallaxContainer = dynamic(
  () => import('@/components/common/ParallaxContainer'),
  {
    ssr: false, // Disable server-side rendering
  }
);

export const metadata = {
  title: 'Portfolio | Oneness Design and Build',
  description:
    'We are a Hong Kong based contractor firm specialises in fitting-out works + design and statuory submissions.',
};
export default function PortfolioDetails({ params }) {
  const portfolioItem = useMemo(
    () => portfolios.filter((elm) => elm.id == params.id)[0] || portfolios[0],
    [portfolios]
  );

  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header links={navLinks2} />
            </nav>
          </div>
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  'url(/assets/images/demo-modern/section-bg-8.jpg)',
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href={`/#portfolio`}
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <i className="icon-arrow-left2 size-14"></i> Back to
                      portfolio
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>

                <div className="row">
                  <div className="col-9 col-sm-12">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block wow fadeRotateIn">
                        {' '}
                        {portfolioItem.title
                          .split(' ')
                          .slice(0, 1)
                          .join(' ')}{' '}
                      </span>
                      <span className="d-block text-end wow fadeRotateIn">
                        {' '}
                        {portfolioItem.title.split(' ').slice(1).join(' ')}{' '}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <>
              <section className="page-section pt-0">
                <div className="container relative">
                  {/* Work Gallery */}
                  <div className="work-full-media mb-80 mb-sm-40 wow fadeInUp">
                    <div className="clearlist work-full-slider owl-carousel light-content">
                      <div>
                        <Image
                          src="/assets/images/demo-brutalist/portfolio/project-single-2.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      <div>
                        <Image
                          className="lazyOwl"
                          src="/assets/images/placeholder.png"
                          data-src="/assets/images/demo-brutalist/portfolio/project-single-1.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      <div>
                        <Image
                          className="lazyOwl"
                          src="/assets/images/placeholder.png"
                          data-src="/assets/images/demo-brutalist/portfolio/project-single-3.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Work Gallery */}

                  {/* Section */}
                  <section className="page-section pt-0">
                    <div className="container position-relative">
                      <div className="row">
                        {/* Project Details */}
                        <div className="col-md-4 mb-sm-40 wow fadeInUp">
                          <div className="block-sticky">
                            <h2 className="h3 mb-20">Project Details</h2>
                            <hr className="mb-20" />
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Category</b>
                              </div>
                              <div className="col-sm-8">
                                {portfolioItem.title}
                              </div>
                            </div>
                            <hr className="mb-20" />
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Address</b>
                              </div>
                              <div className="col-sm-8">
                                {portfolioItem.location}
                              </div>
                            </div>
                            <hr className="mb-20" />
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Size</b>
                              </div>
                              <div className="col-sm-8">
                                {portfolioItem.size}
                              </div>
                            </div>
                            <hr className="mb-20" />
                            <div className="text-gray small">
                              <div>
                                <b>Description:</b>
                              </div>
                              <div>{portfolioItem.description}</div>
                            </div>
                            <hr className="mb-20" />
                          </div>
                        </div>
                        {/* End Project Details */}
                        <div className="col-md-8">
                          <div className="mb-n30">
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                src="/assets/images/portfolio/full-project-1.jpg"
                                alt="Image Description"
                                width={1350}
                                height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                src="/assets/images/portfolio/full-project-2.jpg"
                                alt="Image Description"
                                width={1350}
                                height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                src="/assets/images/portfolio/full-project-3.jpg"
                                alt="Image Description"
                                width={1350}
                                height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                src="/assets/images/portfolio/full-project-4.jpg"
                                alt="Image Description"
                                width={1350}
                                height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Section */}
                </div>
              </section>
              {/* End Section */}
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
