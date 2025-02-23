import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star, Quote, Brain, CheckCircle } from 'lucide-react';
import { localBusinesses } from '../data/localBusinesses';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LocalBusinessCaseStudy() {
  const { id } = useParams();
  const business = localBusinesses[id as string];

  if (!business) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The business case study you're looking for doesn't exist.</p>
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
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
      <Header />

      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={business.images.main}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {business.name}
              </h1>
              <p className="text-xl text-primary-100">
                {business.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* The Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600">{business.challenge}</p>
              </div>

              {/* The Solution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-600 mb-8">{business.solution}</p>
                
                <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
                  <img
                    src={business.images.solution}
                    alt="Solution in action"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Steps</h3>
                  <ul className="space-y-3">
                    {business.implementation.map((step, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
                <ul className="space-y-3">
                  {business.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Store Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={business.images.store}
                  alt={`${business.name} location`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Key Metrics */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h3>
                <div className="space-y-6">
                  {business.metrics.map((metric, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {metric.label}
                      </div>
                      <div className="text-sm text-primary-600 mt-1">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Client Testimonial</h3>
                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                <blockquote className="text-gray-600 italic mb-6">
                  "{business.testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={business.testimonial.image}
                    alt={business.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {business.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {business.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how custom AI solutions can help your business grow, save time, and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center"
              >
                Start Your Project
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="text-white border-2 border-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                View More Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}