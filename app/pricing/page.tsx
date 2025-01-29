import Link from "next/link"

const pricingPlans = [
  {
    title: "Webshop",
    price: "€29.99",
    features: [
      "Fully customizable e-commerce platform",
      "Secure payment gateway integration",
      "Inventory management system",
      "Mobile-responsive design",
      "SEO-friendly product pages",
      "Customer account management",
      "Order tracking and history",
      "Multiple shipping options",
      "Product reviews and ratings",
      "Analytics and reporting tools",
    ],
  },
  {
    title: "Website",
    price: "€19.99",
    features: [
      "Professional website templates",
      "Drag-and-drop page builder",
      "Custom domain integration",
      "Responsive design for all devices",
      "Built-in SEO tools",
      "Blog functionality",
      "Contact form and social media integration",
      "Analytics dashboard",
      "Unlimited pages and bandwidth",
      "24/7 customer support",
    ],
  },
  {
    title: "SEO Tool",
    price: "€99.99",
    features: [
      "Comprehensive keyword research",
      "Competitor analysis",
      "Backlink monitoring and analysis",
      "On-page SEO optimization suggestions",
      "Content optimization tools",
      "Rank tracking for multiple search engines",
      "Site audit and technical SEO analysis",
      "Local SEO features",
      "Custom reporting and white-labeling",
      "Integration with Google Analytics and Search Console",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Pricing Plans</h1>
      <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
        Choose the perfect plan for your needs
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan.title}</h2>
            <p className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
              {plan.price}
              <span className="text-xl font-normal text-gray-600 dark:text-gray-400">/mo</span>
            </p>
            <ul className="mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="h-5 w-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={`/signup?plan=${plan.title.toLowerCase()}`}
              className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

