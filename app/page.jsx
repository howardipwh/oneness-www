import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer/Footer';
import Hero from '@/components/core/Home/Hero/Hero';
import Content from '@/components/core/Home/Content/Content';

import { navLinks } from '@/data/oneness';

import dynamic from 'next/dynamic';
const ParallaxContainer = dynamic(
  () => import('@/components/common/ParallaxContainer'),
  {
    ssr: false, // Disable server-side rendering
  }
);

export const metadata = {
  title: 'Oneness Design and Build',
  description:
    'We are a Hong Kong based contractor firm specialises in fitting-out works + design and statuory submissions.',
};

export default function Page() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header links={navLinks} />
            </nav>
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
              id="home"
              style={{
                backgroundImage:
                  'url(/assets/images/oneness/PHOTO-20240723-LIVING.jpg)',
              }}
            >
              <Hero />
            </ParallaxContainer>

            <Content onePage eadge2 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
