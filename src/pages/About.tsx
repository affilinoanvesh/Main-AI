import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Lightbulb, MessageSquare, ChevronRight, Users, Target, HandshakeIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="About Us - Small Business AI Solutions"
        description="We're a small business just like you, dedicated to creating personalized AI solutions that actually work for your needs. Learn about our approach to helping local businesses thrive."
        canonical="/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Our workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Small Business, Big Understanding
              </h1>
              <p className="text-xl text-primary-100">
                We're not a big tech company – we're a small business just like you, and we understand the real challenges you face every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 mb-8">
                As small business owners ourselves, we've experienced firsthand the challenges of running a business in today's fast-paced world. We know what it's like to wear multiple hats, juggle competing priorities, and try to stay ahead of the competition.
              </p>
              <p className="text-xl text-gray-600">
                That's why we started User Labs – to create AI solutions that actually work for small businesses, not just enterprise companies. We believe that powerful technology should be accessible and practical for local businesses like yours.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We Listen First</h3>
                <p className="text-gray-600">
                  Before suggesting any solutions, we take the time to truly understand your business, challenges, and goals. Every business is unique, and your solution should be too.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Solutions</h3>
                <p className="text-gray-600">
                  We focus on creating solutions that are practical and easy to use. No complicated systems or steep learning curves – just tools that work for your business.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <HandshakeIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Partnership</h3>
                <p className="text-gray-600">
                  We're not here to sell you a system and disappear. We provide ongoing support and adjustments to ensure your solution grows with your business.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Touch</h3>
                  <p className="text-gray-600">
                    We treat your business like our own. Every solution is crafted with care and attention to your specific needs, not a one-size-fits-all approach.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Innovation</h3>
                  <p className="text-gray-600">
                    We believe in innovation that serves a purpose. Our solutions are designed to solve real problems and deliver tangible results.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Focus</h3>
                  <p className="text-gray-600">
                    We're committed to helping local businesses thrive. Your success is our success, and we take pride in being part of your growth story.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Open Communication</h3>
                  <p className="text-gray-600">
                    We believe in clear, honest communication. No tech jargon or hidden fees – just straightforward discussions about what's best for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Let's Grow Together
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Ready to work with a team that truly understands your business needs? Let's have a conversation about how we can help you grow.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors inline-flex items-center"
              >
                Start the Conversation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;