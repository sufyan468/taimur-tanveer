"use client";

import Header from "./components/Header";
import WorkEthics from "./components/WorkEthics";
import Development from "./components/Development";
import Reviews from "./components/Reviews";
import "swiper/css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {
  blogsData,
  contactAddressData,
  contributions,
  developmentData,
  ethicsItemData,
  portfolio,
  reviews,
  SkillsItemsData,
} from "./utils/data";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import ScrollIndicator from "./components/General/ScrollIndicator";
import dynamic from "next/dynamic";
import Skills from "./components/Skills";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Header />
      <WorkEthics data={ethicsItemData} contributions={contributions} />
      <Portfolio
        data={portfolio}
        title="My Amazing Works"
        subtitle="Portfolio"
        description=" Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate"
      />
      <Skills
        data={SkillsItemsData}
        subtitle="My Skills"
        title="I Develop My Skills Regularly"
        description="Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate"
      />
      <Development data={developmentData} />
      <Reviews
        data={reviews}
        title=" What Clients Say"
        subtitle="Testimonials"
        description=" Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate"
      />

      <Contact data={contactAddressData} />
      <Blogs
        data={blogsData}
        subtitle="Latest News"
        title="Checkout My Recent Blogs"
        description=" Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen
          derit in voluptate"
      />
      <Footer />
      <div className="fixed -right-8 lg:right-0 md:right-0 xl:right-0 bottom-24 rotate-90 cursor-pointer z-40">
        <ScrollIndicator />
      </div>
      <AnimatedCursor
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
    </div>
  );
}
