import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Terms of Service"
        description="Read our terms of service to understand the rules, guidelines, and agreements that govern the use of our AI solutions and services."
        canonical="/terms"
      />
      <Header />

      <main className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last updated: 23 February 2025</p>

          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                User Labs provides AI-powered solutions for small businesses, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Custom AI implementation</li>
                <li>System integration</li>
                <li>Training and support</li>
                <li>Ongoing maintenance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide accurate information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Notify us of any security concerns</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Payments are processed securely through our payment providers</li>
                <li>Services are billed according to the agreed payment schedule</li>
                <li>Late payments may result in service interruption</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of your data. We retain ownership of our services, including all related intellectual property rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Our liability is limited to the extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate the service agreement with 30 days' written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>All outstanding payments become due</li>
                <li>Access to services will be discontinued</li>
                <li>You may request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms, please contact us at:
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-2">Email: legal@userlabs.co.nz</p>
                <p className="text-gray-600">Phone: 0800 123 456</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
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

export default Terms;