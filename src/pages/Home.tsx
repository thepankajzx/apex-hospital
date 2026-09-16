import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServiceGrid from '../components/home/ServiceGrid';
import Technology from '../components/home/Technology';
import PackageGrid from '../components/home/PackageGrid';
import HomeSample from '../components/home/HomeSample';
import Testimonials from '../components/home/Testimonials';
import LocationSection from '../components/home/LocationSection';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <TrustBar />
      <Technology />
      <PackageGrid />
      <HomeSample />
      <Testimonials />
      <LocationSection />
      <FinalCTA />
    </>
  );
};

export default Home;
