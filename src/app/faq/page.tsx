import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section>
      <MaxWidthWrapper className="pd-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:p-24 xl:pt-32 lg:pb-8">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight md:text-6xl lg:text-7xl">
              Frequentyly Asked
              <span className="bg-blue-700 text-white">Question</span>
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Dont worry, Find common question here!
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <Image
            src="/FAQ.jpg" // Replace with your image path
            alt="Frequently Asked Questions Illustration"
            width={400}
            height={400}
          />
        </div>
      </MaxWidthWrapper>
      {/* Accordion for Questions */}
      <section className="mt-16 bg-white py-10 px-6 lg:px-24">
        <MaxWidthWrapper>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What is Cvolio?
              </AccordionTrigger>
              <AccordionContent>
                Cvolio is a platform that helps you create beautiful portfolio
                websites quickly using pre-designed templates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent>
                Simply choose a template, customize it with your information,
                and deploy it! It's that easy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Are the templates free?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We provide a variety of free templates to get you started
                with your portfolio creation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Can I customize the templates?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! All templates are fully customizable to fit your
                unique needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </MaxWidthWrapper>
      </section>
    </section>
  );
};

export default Faq;
