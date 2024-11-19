"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

// Define the Template type
type Template = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

// Define the templates array
const templates: Template[] = [
  {
    id: 1,
    title: "Modern Portfolio",
    description: "A sleek and responsive portfolio template.",
    price: "$19.99",
    image: "/template/template1/preview.png",
  },
  {
    id: 2,
    title: "Creative Showcase",
    description: "Perfect for showcasing creative projects.",
    price: "$24.99",
    image: "/template/template2/preview.png",
  },
  {
    id: 3,
    title: "Minimal Design",
    description: "Clean and minimalistic design for professionals.",
    price: "$29.99",
    image: "/template/template3/preview.png",
  },
];

const Checkout = () => {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId"); // Get the template ID from the query string
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  useEffect(() => {
    if (templateId) {
      const template = templates.find(
        (template) => template.id === parseInt(templateId, 10)
      );
      setSelectedTemplate(template || null);
    }
  }, [templateId]);

  if (!selectedTemplate) {
    return <p className="text-center mt-10">Loading template details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Template Details */}
        <div className="border rounded-md p-4 shadow-sm">
          <img
            src={selectedTemplate.image}
            alt={selectedTemplate.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{selectedTemplate.title}</h2>
          <p className="text-gray-600 mt-2">{selectedTemplate.description}</p>
          <p className="text-lg font-bold mt-4">{selectedTemplate.price}</p>
        </div>

        {/* Payment Form */}
        <div className="border rounded-md p-4 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Payment Details</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="card" className="block text-sm font-medium">
                Card Number
              </label>
              <input
                type="text"
                id="card"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Pay {selectedTemplate.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
