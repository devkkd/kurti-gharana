import AnnouncementBar from "./component/AnnouncementBar";
import Header from "./component/Header";
import Footer from "./component/Footer";

import Hero from "./component/Hero";
import CollectionSection from "./component/CollectionSection";
import FeaturedProducts from "./component/FeaturedProducts";
import BrandStory from "./component/BrandStory";
import CraftProcess from "./component/CraftProcess";
import TrustBar from "./component/TrustBar";
import Testimonials from "./component/Testimonials";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <CollectionSection />
        <FeaturedProducts />
        <CraftProcess />
        <Testimonials />
        <BrandStory />
      </main>

      <Footer />
    </>
  );
}
