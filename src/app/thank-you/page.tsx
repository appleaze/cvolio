"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ThankYouPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-12 text-center">
        <h1 className="font-bold md:text-6xl lg:text-7xl mb-">
          Thank <span className="bg-blue-700 text-white">You</span> <br></br>
          for Your Purchase!
        </h1>
        <p className="text-2xl mb-5">
          We have received your payment and your order is being processed.
        </p>
        <p className="text-xl mb-5">
          You will receive an email confirmation shortly with your order
          details.
        </p>
        <div className="mt-6">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ThankYouPage;
