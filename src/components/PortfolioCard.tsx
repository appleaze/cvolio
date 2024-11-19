import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const templates = [
  {
    id: 1,
    title: "Modern Portfolio",
    description: "A sleek and responsive portfolio template.",
    image: "/template/template1/preview.png",
    demoPath: "/templates/minimal-1.0.0/minimal-1.0.0/index.html", // Live demo URL
    checkoutPath: "/checkout?templateId=1", // Checkout page URL
  },
  {
    id: 2,
    title: "Creative Showcase",
    description: "Perfect for showcasing creative projects.",
    image: "/template/template2/preview.png",
    demoPath:
      "/templates/FreeFolio Free Website Template - Free-CSS.com/freelancer-portfolio-template/index.html",
    checkoutPath: "/checkout?templateId=2",
  },
  {
    id: 3,
    title: "Minimal Design",
    description: "Clean and minimalistic design for professionals.",
    image: "/template/template3/preview.png",
    demoPath:
      "/templates/Global Free Website Template - Free-CSS.com/global-master/index.html",
    checkoutPath: "/checkout?templateId=3",
  },
  {
    id: 4,
    title: "Architect Design",
    description: "Perfect for architectural firms and professionals.",
    image: "/template/template3/preview.png",
    demoPath: "/templates/untree.co-architect/untree.co-architect/index.html",
    checkoutPath: "/checkout?templateId=4",
  },
  {
    id: 5,
    title: "Medio Minimalist",
    description: "A modern look for blogs or small businesses.",
    image: "/template/template3/preview.png",
    demoPath: "/templates/untree.co-medio/untree.co-medio/index.html",
    checkoutPath: "/checkout?templateId=5",
  },
];

const PortfolioCard = () => {
  return (
    <section className="py-12">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Templates
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="transition-transform transform hover:scale-105"
            >
              {/* Template Image */}
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover rounded-t"
              />
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                {/* Live Demo Button */}
                <a
                  href={template.demoPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View Demo
                </a>
                {/* Checkout Button */}
                <a
                  href={`/checkout?templateId=${template.id}`}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Checkout
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PortfolioCard;
