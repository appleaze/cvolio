import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Laptop from "./Laptop";

const LandingPage = () => {
  return (
    <section>
      <MaxWidthWrapper className="pd-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:p-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 top-20 hidden lg:block">
              {/* <img src="/next.svg" alt="..." /> */}
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight md:text-6xl lg:text-7xl">
              Your Portfolio on a{" "}
              <span className="bg-blue-700 text-white">Creative</span> Website
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Create your creative own Portfolio,{" "}
              <span className="font-semibold">starting today.</span>
              Cvolio allows you to create portfolios instantly, using templates.
            </p>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-center">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Fast and Reliable
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Simple to deploy
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Modern Looking Design
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Laptop className='w-96' imgSrc='/template_minimal.png' />
            </div>
          </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LandingPage;
