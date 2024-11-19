import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TutorialPage = () => {
  const steps = [
    { step: 1, title: "Find Your Template", description: "Browse our wide variety of templates and pick the one that suits your needs." },
    { step: 2, title: "Find Your Domain Name", description: "Choose a unique name for your website that resonates with your brand." },
    { step: 3, title: "Find Your Domain Extension", description: "Select an extension (e.g., .com, .org, .net) that aligns with your goals." },
    { step: 4, title: "Fill Out Your Data", description: "Provide the necessary details such as email, contact, and other required information." },
    { step: 5, title: "Pick Payment Method", description: "Select your preferred payment method." },
    { step: 6, title: "Finish Your Payment", description: "Complete the transaction to secure your domain and hosting." },
    { step: 7, title: "Wait 2x24 Hours", description: "Once confirmed, your website will be live within 2x24 hours!" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <MaxWidthWrapper className="lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">How to Deploy Your Website</h1>
          <p className="text-lg text-gray-600 mt-4">
            Follow these steps to bring your website online quickly and easily.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {steps.map(({ step, title, description }, index) => (
              <div
                key={step}
                className={`relative flex items-start ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline Line Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 h-8 w-8 rounded-full z-10"></div>

                {/* Step Content */}
                <div className={`w-full lg:w-1/2 px-6 lg:px-12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{step}. {title}</h2>
                  <p className="text-lg text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TutorialPage;
