import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import { industries } from '../data/industries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Industry() {
  const { id } = useParams();
  const industry = industries[id as string];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!industry) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <Header />
        <SEO 
          title="Industry Solutions"
          description=""
          canonical={`/industries/${id}`}
        />
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
            <p className="text-gray-600 mb-8">The industry page you're looking for doesn't exist.</p>
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header />
      <SEO 
        title={`AI Solutions for ${industry.name}`}
        description={`Transform your ${industry.name.toLowerCase()} business with custom AI solutions. ${industry.description}`}
        canonical={`/industries/${id}`}
        image={industry.image}
      />

      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={industry.image}
          alt={industry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-primary-100" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {industry.name}
                </h1>
              </div>
              <p className="text-xl text-primary-100">
                {industry.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenges */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Challenges in {industry.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our AI Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.solutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-primary-600">{solution.timesSaved}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Features
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {industry.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Integrations
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full shadow-sm flex items-center"
                >
                  <span className="text-gray-900">{integration}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-primary-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.metrics.map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="font-medium text-gray-900 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you save time, reduce costs, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Schedule a Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center"
              >
                View Case Studies
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

export default Industry;