import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInUp">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  🎓 Live & Updated Daily
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-gray-900">Your Academic</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Success Hub
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Access comprehensive study materials, notes, and past papers organized by
                <span className="font-bold text-blue-600"> Department</span>,
                <span className="font-bold text-purple-600"> Branch</span>, and
                <span className="font-bold text-pink-600"> Year</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-2xl border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-all duration-300 hover:shadow-xl flex items-center gap-2">
                    Create Account
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="space-y-1">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2K+</div>
                  <div className="text-sm font-medium text-gray-600">Documents</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1K+</div>
                  <div className="text-sm font-medium text-gray-600">Active Students</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">100+</div>
                  <div className="text-sm font-medium text-gray-600">Subjects</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Card Stack */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Card 1 */}
                <div className="absolute w-80 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-2xl font-bold mb-2">Study Notes</h3>
                      <p className="text-white/90">Comprehensive semester-wise materials</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">2025</span>
                      <span>1,200+ files</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute w-80 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl transform -rotate-3 translate-x-12 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="text-6xl mb-4">📝</div>
                      <h3 className="text-2xl font-bold mb-2">Past Papers</h3>
                      <p className="text-white/90">Previous year question papers</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">All Years</span>
                      <span>800+ papers</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute w-80 h-96 bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl shadow-2xl transform rotate-12 -translate-x-6 translate-y-8 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="text-6xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold mb-2">Quick Access</h3>
                      <p className="text-white/90">Find what you need instantly</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Fast</span>
                      <span>24/7 available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for students, by students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="🔍"
              title="Smart Search"
              description="Find materials instantly with advanced filters"
              gradient="from-blue-500 to-cyan-500"
              delay="0s"
            />
            <FeatureCard
              icon="📤"
              title="Easy Upload"
              description="Share your notes and help others succeed"
              gradient="from-purple-500 to-pink-500"
              delay="0.1s"
            />
            <FeatureCard
              icon="📱"
              title="Mobile Ready"
              description="Access anywhere on any device"
              gradient="from-green-500 to-emerald-500"
              delay="0.2s"
            />
            <FeatureCard
              icon="⚡"
              title="Lightning Fast"
              description="Instant downloads, no waiting"
              gradient="from-orange-500 to-red-500"
              delay="0.3s"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
            <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <StepCard
                number="1"
                title="Sign Up"
                description="Create your free account in seconds"
                icon="✍️"
              />
              <StepCard
                number="2"
                title="Browse & Search"
                description="Find materials by department, year, or subject"
                icon="🔎"
              />
              <StepCard
                number="3"
                title="Download & Share"
                description="Access files instantly and contribute your own"
                icon="📥"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Ready to Excel in Your Studies?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of students already using our platform to achieve academic success
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/signup">
                  <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    Get Started Now
                  </button>
                </Link>
                <Link to="/branchdeaprtemntyear">
                  <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                    Browse Materials
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, gradient, delay }) => (
  <div
    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 animate-fadeInUp"
    style={{ animationDelay: delay }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
    <div className="relative space-y-4">
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Step Card Component
const StepCard = ({ number, title, description, icon }) => (
  <div className="relative text-center space-y-4 group">
    <div className="relative inline-block">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-xl group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="absolute -top-2 -right-2 text-4xl">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;