import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { caseStudies } from '../data/caseStudies';

function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="AI Success Stories"
        description="Discover how small businesses are transforming their operations with custom AI solutions. Real results from real businesses in your industry."
        canonical="/case-studies"
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Small Business Success Stories
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              See how local businesses like yours are using simple AI solutions to save time, reduce costs, and grow their customer base.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.values(caseStudies).map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.brief}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <span className="font-semibold text-primary-600">{metric.value}</span>
                        <span className="text-gray-500 ml-1">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{study.client}</span>
                    <ChevronRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's discuss how we can transform your business operations with custom AI solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/industries"
                  className="text-white border-2 border-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-500 transition-colors inline-flex items-center"
                >
                  Explore Industries
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudies;