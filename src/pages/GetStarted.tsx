import React from 'react';
import { Brain, ArrowRight, MessageSquare, Wrench, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your AI Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's find the right AI solution for your business. Choose the path that best matches your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss your business needs and explore how AI can help you grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              View Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Explore real examples of AI solutions helping small businesses like yours.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              See Case Studies
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Assessment
            </h2>
            <p className="text-gray-600 mb-6">
              Get a quick evaluation of how AI could benefit your specific business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Start Assessment
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default GetStarted;