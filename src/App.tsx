import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Brain, Clock, Wrench, ChevronRight, Code, Settings, Users, Star, ArrowRight, Award, Building2, Quote } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import { caseStudies } from './data/caseStudies';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Custom AI Solutions for Small Businesses"
        description="Transform your small business with personalized AI solutions. Save time, reduce costs, and grow your customer base with AI tools tailored to your needs."
        canonical="https://customai.solutions"
      />
      <ScrollToTop />
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom AI Solutions for Your Small Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I create personalized AI solutions that actually fit your business needs. 
              As a fellow small business owner, I understand the importance of getting it right.
            </p>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Start Your AI Journey
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose My Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
                <p className="text-gray-600">
                  Direct collaboration with you to ensure the solution perfectly matches your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Code className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
                <p className="text-gray-600">
                  Tailored AI solutions built specifically for your business processes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Settings className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">10 Hours Free Support</h3>
                <p className="text-gray-600">
                  Complimentary troubleshooting and adjustments as you start using the system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Local Business Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Process */}
        <section className="bg-gradient-to-b from-white to-primary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How We'll Work Together
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">1. Consultation</h3>
                <p className="text-gray-600">Understanding your business needs and challenges</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">2. Solution Design</h3>
                <p className="text-gray-600">Creating a customized AI solution plan</p>
              </div>
              <div className="text-center">
                <Wrench className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">3. Implementation</h3>
                <p className="text-gray-600">Building and integrating your AI solution</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">4. Support</h3>
                <p className="text-gray-600">10 hours of free troubleshooting and updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how custom AI solutions can help your business grow, save time, and improve customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="text-white border-2 border-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;