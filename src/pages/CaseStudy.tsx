import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BarChart, Clock, Users, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { caseStudies } from '../data/caseStudies';
import SEO from '../components/SEO';

function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title={study ? `${study.title} - Case Study` : 'Case Study'}
        description={study ? `Learn how ${study.client} achieved ${study.metrics[0].value} ${study.metrics[0].label} using our custom AI solutions. Real results from real businesses.` : ''}
        canonical={`/case-studies/${id}`}
        image={study?.image}
        type="article"
      />
      <Header />
      
      {!study ? (
        <div className="flex items-center justify-center flex-1 min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Link to="/case-studies" className="text-primary-600 hover:text-primary-700 font-medium">
              View All Case Studies
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative h-96">
            <img
              src={study.images.main}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-600 bg-opacity-75" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="text-primary-100 mb-4">{study.industry}</div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {study.title}
                  </h1>
                  <div className="text-xl text-primary-100">{study.client}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Challenge */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                    <p className="text-gray-600 mb-6">{study.solution}</p>
                    <img
                      src={study.images.process}
                      alt="Solution Process"
                      className="w-full rounded-xl shadow-lg mb-6"
                    />
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Steps</h3>
                      <ul className="space-y-3">
                        {study.implementation.map((step, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
                    <ul className="space-y-3">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Metrics */}
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h3>
                    <div className="space-y-6">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                            {index === 0 && <BarChart className="w-6 h-6 text-primary-600" />}
                            {index === 1 && <Clock className="w-6 h-6 text-primary-600" />}
                            {index === 2 && <Users className="w-6 h-6 text-primary-600" />}
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-500">{metric.label}</div>
                          </div>
                        </div>
                      ))}
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
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default CaseStudy;