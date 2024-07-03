const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-light-blue dark:bg-dark-blue">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="w-full px-4 lg:w-2/3 text-center">
            <div className="max-w-[470px] mx-auto">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Reliable and Secure
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Veily ensures your feedback is securely stored and handled, providing a reliable platform for sharing insights.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Expert Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Our team is here to support you with any issues or questions, ensuring you get the most out of Veily.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovative Features
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Veily is built with the latest technologies to provide you with innovative features for effective feedback management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
