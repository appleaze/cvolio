"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

type Template = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

const templates: Template[] = [
  {
    id: 1,
    title: "Modern Portfolio",
    description: "A sleek and responsive portfolio template.",
    price: "Rp. 500.000,00",
    image: "/template_minimal.png",
  },
  {
    id: 2,
    title: "Creative Showcase",
    description: "Perfect for showcasing creative projects.",
    price: "Rp. 500.000,00",
    image: "/template_2.png",
  },
  {
    id: 3,
    title: "Minimal Design",
    description: "Clean and minimalistic design for professionals.",
    price: "Rp. 500.000,00",
    image: "/templeate_futuristic.png",
  },
  {
    id: 4,
    title: "Minimal Design",
    description: "Clean and minimalistic design for professionals.",
    price: "Rp. 500.000,00",
    image: "/template_architech.png",
  },
  {
    id: 5,
    title: "Minimal Design",
    description: "Clean and minimalistic design for professionals.",
    price: "Rp. 500.000,00",
    image: "/template_media.png",
  },
];

const domainExtensions = [
  { id: "com", label: ".com" },
  { id: "net", label: ".net" },
  { id: "org", label: ".org" },
];

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [selectedExtension, setSelectedExtension] = useState<string>("com");
  const router = useRouter();

  useEffect(() => {
    if (templateId) {
      const template = templates.find(
        (template) => template.id === parseInt(templateId, 10)
      );
      setSelectedTemplate(template || null);
    }
  }, [templateId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After form submission, redirect to the Thank You page
    router.push("/thank-you"); // Replace '/thank-you' with the actual path of your thank you page
  };

  if (!selectedTemplate) {
    return (
      <MaxWidthWrapper>
        <p className="text-center mt-10">Loading template details...</p>
      </MaxWidthWrapper>
    );
  }

  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      {selectedTemplate ? (
        <MaxWidthWrapper>
          <div className="py-12">
            <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Template Details */}
              <div className="border rounded-md p-4 shadow-sm">
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">
                  {selectedTemplate.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {selectedTemplate.description}
                </p>
                <p className="text-lg font-bold mt-4">
                  {selectedTemplate.price}
                </p>
              </div>

              {/* Form Section */}
              <div className="border rounded-md p-4 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Your Details</h3>
                <form className="space-y-4">
                  {/* ID Number */}
                  <div>
                    <label
                      htmlFor="id-number"
                      className="block text-sm font-medium"
                    >
                      ID Number
                    </label>
                    <input
                      type="text"
                      id="id-number"
                      className="w-full border rounded-md p-2 mt-1"
                      placeholder="Enter your ID number"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border rounded-md p-2 mt-1"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border rounded-md p-2 mt-1"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Preferred Domain Extension */}
                  <div>
                    <p className="block text-sm font-medium mb-2">
                      Preferred Domain Extension
                    </p>
                    <RadioGroup
                      className="space-y-2"
                      onValueChange={(value) => setSelectedExtension(value)}
                      value={selectedExtension}
                    >
                      {domainExtensions.map((ext) => (
                        <div
                          key={ext.id}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem id={ext.id} value={ext.id} />
                          <label
                            htmlFor={ext.id}
                            className="text-sm font-medium cursor-pointer"
                          >
                            {ext.label}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label
                      htmlFor="cv-upload"
                      className="block text-sm font-medium"
                    >
                      Upload Your CV
                    </label>
                    <input
                      type="file"
                      id="cv-upload"
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>

                  {/* Payment Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    onClick={handleSubmit}
                  >
                    Pay {selectedTemplate.price} (Domain: {selectedExtension})
                  </button>
                </form>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      ) : null}
    </Suspense>
  );
};

export default CheckoutPage;
