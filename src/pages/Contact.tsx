import React from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Contact() {
  const [state, handleSubmit] = useForm("xldgzdaa");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <SEO 
          title="Message Sent"
          description="Thank you for contacting CustomAI Solutions. We'll get back to you within 24 hours."
          canonical="https://customai.solutions/contact"
        />
        <Header />
        <div className="flex items-center justify-center flex-1 min-h-[calc(100vh-200px)] px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <Link
              to="/"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Contact Us"
        description="Get in touch to discuss how custom AI solutions can help your business grow. Schedule a consultation and start your AI journey today."
        canonical="https://customai.solutions/contact"
      />
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's Talk</h1>
          <p className="text-gray-600 mb-8">
            Tell me about your business and how AI could help you grow.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <ValidationError prefix="Company" field="company" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How can I help?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 mr-2" />
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;