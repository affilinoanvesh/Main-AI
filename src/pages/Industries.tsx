import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="AI Solutions by Industry"
        description="Industry-specific AI solutions designed for your business needs. Find the perfect AI tools for your sector and start transforming your operations today."
        canonical="/industries"
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions by Industry
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover how AI can transform your business with industry-specific solutions designed for your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(industries).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center text-primary-600 group-hover:translate-x-1 transition-transform">
                      View Solutions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Industries;