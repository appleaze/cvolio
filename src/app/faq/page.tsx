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
                Cvolio is your ultimate solution for creating a professional
                personal portfolio instantly. Whether you are a student,
                freelancer, or job seeker, Cvolio helps you showcase your
                skills, experience, and projects with ease.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                How do I purchase a portfolio website on Cvolio?
              </AccordionTrigger>
              <AccordionContent>
                The process is simple! Follow these steps: Choose your preferred
                template or domain extension. Complete the guided steps on our
                platform. Do not forget to apply a promo code for discounts!
                Want detailed instructions? Visit our How It Works page for more
                info.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                What are the payment options for Cvolio?
              </AccordionTrigger>
              <AccordionContent>
                Cvolio supports multiple payment methods to ensure a smooth
                transaction: Bank Transfer (Virtual Account): Supported by major
                banks. Xendit Payments for a variety of options, including:
                Virtual Accounts (Mandiri, BRI, BNI, Permata) E-Wallets (OVO,
                DANA, LinkAja) QRIS payments Credit Cards and Paylater
                installments Note: Payments must be completed within 48 hours to
                avoid expiration. Finish your transaction promptly to secure
                your domain and template.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                What happens after I complete my payment?
              </AccordionTrigger>
              <AccordionContent>
                Once your payment is confirmed: You will receive an email
                invoice as proof of purchase. Our team will prepare your
                portfolio website, ready within 2 business days. Once completed,
                you will receive another email with: Access to your website
                Editing guide and documentation If you encounter any issues, our
                customer support team is here to help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </MaxWidthWrapper>
      </section>
    </section>
  );
};

export default Faq;
