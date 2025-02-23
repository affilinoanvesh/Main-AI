import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, MessageSquare, ChevronRight, Beaker } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <SEO 
        title="Page Not Found"
        description="The page you're looking for couldn't be found. Explore our other pages or contact us for help."
        canonical="/404"
      >
        <meta name="robots" content="noindex, nofollow" />
      </SEO>
      <Header />

      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 pointer-events-none">
              <div className="blur-[106px] h-56 bg-gradient-to-br from-primary-600 to-purple-400" />
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-primary-300" />
            </div>

            <div className="relative">
              {/* 404 Content */}
              <div className="text-center mb-16">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center transform rotate-12 mb-8 mx-auto">
                    <Beaker className="w-12 h-12 text-white transform -rotate-12" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl blur opacity-30" />
                </div>
                <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 leading-none mb-4">404</h1>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Looks like this experiment went a bit wrong. Don't worry though – we've got plenty of other solutions to explore!
                </p>
              </div>

              {/* Navigation Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Link
                  to="/"
                  className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Home className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Return Home</h3>
                    <p className="text-gray-600">
                      Back to our homepage
                    </p>
                    <ChevronRight className="w-5 h-5 text-primary-600 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>

                <Link
                  to="/case-studies"
                  className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Search className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Solutions</h3>
                    <p className="text-gray-600">
                      Explore success stories
                    </p>
                    <ChevronRight className="w-5 h-5 text-primary-600 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>

                <Link
                  to="/contact"
                  className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Help</h3>
                    <p className="text-gray-600">
                      Talk to our team
                    </p>
                    <ChevronRight className="w-5 h-5 text-primary-600 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Contact Support
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;