"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button in the top right corner of the page. Fill in your details and follow the prompts to complete the registration process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Specific payment options may vary depending on your location.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "To cancel your subscription, log into your account, go to 'Subscription Settings', and click on 'Cancel Subscription'. Follow the prompts to complete the cancellation process. Please note that you'll continue to have access to your account until the end of your current billing period.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial for all our plans. You can sign up for the trial without entering any payment information. At the end of the trial, you can choose to subscribe or your account will be automatically downgraded to a free plan with limited features.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team through various channels. Use the 'Contact Us' form on our website, email us at support@sellenix.com, or use the live chat feature available on the bottom right of every page when you're logged in.",
  },
]

const knowledgeBase = [
  {
    category: "Getting Started",
    articles: [
      { title: "Creating your first webshop", link: "#" },
      { title: "Setting up payment gateways", link: "#" },
      { title: "Customizing your website theme", link: "#" },
    ],
  },
  {
    category: "Account Management",
    articles: [
      { title: "Changing your password", link: "#" },
      { title: "Managing team members", link: "#" },
      { title: "Billing and invoices", link: "#" },
    ],
  },
  {
    category: "SEO Tools",
    articles: [
      { title: "Performing keyword research", link: "#" },
      { title: "Understanding your site's SEO score", link: "#" },
      { title: "Implementing SEO best practices", link: "#" },
    ],
  },
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center neon-text">Help Center</h1>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-4 pr-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <span className="font-medium text-left">{faq.question}</span>
              {openQuestion === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openQuestion === index && (
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Knowledge Base */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Knowledge Base</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeBase.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a href={article.link} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

