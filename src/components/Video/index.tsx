"use client";

import SectionTitle from "../Common/SectionTitle";

const HelpSection = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-light-blue dark:bg-dark-blue">
      <div className="container">
        <SectionTitle
          title="We are here to help"
          paragraph="Veily provides the support you need to share ideas anonymously, gain insights, and improve your workplace. Reach out to us anytime."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md shadow-lg bg-white dark:bg-gray-800 p-8 text-center"
              data-wow-delay=".15s"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-white">
                Need Assistance?
              </h2>
              <p className="mt-2 text-body-color dark:text-body-color-dark">
                Our team is ready to support you.
              </p>
              <button className="mt-4 rounded bg-primary px-6 py-3 text-white hover:bg-primary-dark">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/help/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default HelpSection;
