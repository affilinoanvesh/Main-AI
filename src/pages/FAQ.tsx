import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What kind of businesses do you work with?",
          a: "We work with small to medium-sized businesses across New Zealand. Our solutions are particularly valuable for businesses looking to automate tasks, improve efficiency, or enhance customer service."
        },
        {
          q: "How long does it take to implement an AI solution?",
          a: "Implementation time varies depending on the complexity of the solution. Simple automations can be ready in 2-4 weeks, while more complex systems might take 6-8 weeks. We'll provide a detailed timeline during our consultation."
        },
        {
          q: "Do I need technical expertise to use your solutions?",
          a: "No. We design our solutions to be user-friendly and intuitive. We provide comprehensive training and ongoing support to ensure you're comfortable using the system."
        }
      ]
    },
    {
      category: "Data & Security",
      questions: [
        {
          q: "How do you protect our business data?",
          a: "We implement industry-standard security measures including encryption, secure data storage, and regular security audits. We comply with the Privacy Act 2020 and all relevant NZ data protection regulations."
        },
        {
          q: "Who owns the data used in the AI system?",
          a: "You retain full ownership of your business data. We only use your data to train and improve your specific AI system, never for other purposes without explicit permission."
        },
        {
          q: "Can we export our data if we decide to switch providers?",
          a: "Yes. We provide data portability options that allow you to export your data in standard formats at any time."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          q: "What kind of support do you provide?",
          a: "We provide comprehensive support including system monitoring, regular updates, bug fixes, and user support. Each solution includes 10 hours of free support to help you get started."
        },
        {
          q: "How quickly do you respond to support requests?",
          a: "We aim to respond to all support requests within 24 hours. Critical issues are addressed on a priority basis, often within a few hours."
        },
        {
          q: "Do you provide training for our staff?",
          a: "Yes. We provide initial training sessions for your team and documentation for future reference. Additional training sessions can be arranged as needed."
        }
      ]
    },
    {
      category: "Pricing & Services",
      questions: [
        {
          q: "How do you structure your pricing?",
          a: "Our pricing is transparent and based on the specific needs of your business. We'll provide a detailed quote after understanding your requirements during the consultation."
        },
        {
          q: "Do you require long-term commitments?",
          a: "No. We don't believe in locking you into long-term contracts. You can use our services on a month-to-month basis, giving you the flexibility to adjust or end the service as your business needs change."
        },
        {
          q: "What happens if we need to stop using the service?",
          a: "You can stop using our services at any time. We'll help ensure a smooth transition and provide you with all your data in a standard format."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our AI solutions, implementation process, data security, and support services."
        canonical="/faq"
      />
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our AI solutions and services.
            </p>
          </div>

          <div className="space-y-16">
            {faqs.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-8">
              Still have questions? We're here to help.
            </p>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;