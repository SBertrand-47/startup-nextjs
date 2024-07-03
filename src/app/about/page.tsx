import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Veily | Empowering Anonymous Professional Feedback",
  description: "Learn more about Veily, a platform designed to help professionals share their ideas and feedback anonymously.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Veily"
        description="Discover how Veily empowers professionals to share their ideas and feedback anonymously, fostering open communication and constructive insights."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
