import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Infouserfron = () => {
  const [usserData, getUserrdata] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Auto-fetch user data on component mount
  useEffect(() => {
    handleclick1();
  }, []);

  async function handleclick1() {
    setIsLoading(true);
    setError("");

    try {
      const getUsetrInfo = await axios.get("https://uploadpdf2-0-2.onrender.com/authenttication/user/info", {
        withCredentials: true,
      });

      if (getUsetrInfo && getUsetrInfo.status === 200) {
        getUserrdata(getUsetrInfo.data.findUser);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        console.log(e);
        setError(e.response.data.message + " - Please log in again");
      } else {
        setError("Failed to fetch user information");
      }
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View and manage your account information
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 animate-fadeIn">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-purple-200 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-purple-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
            </div>
            <p className="mt-6 text-gray-600 font-medium">Loading your profile...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-red-200 p-8 mb-8 animate-fadeInUp">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-600 mb-2">Error Loading Profile</h3>
                <p className="text-gray-700 mb-4">{error}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleclick1}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Try Again
                  </button>
                  <Link to="/login">
                    <button className="px-6 py-2.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                      Go to Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Profile Card */}
        {usserData && !isLoading && (
          <div className="space-y-6 animate-fadeInUp">
            {/* Main Profile Card */}
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Header with Avatar */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {usserData.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h2 className="text-3xl font-black text-white mb-2">
                      {usserData.name || usserData.username}
                    </h2>
                    <p className="text-white/90 text-lg">@{usserData.username}</p>
                  </div>
                  <button
                    onClick={handleclick1}
                    className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                  </button>
                </div>
              </div>

              {/* Profile Information Grid */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Account Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="group p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-600 mb-1">Email Address</p>
                        <p className="text-gray-900 font-medium break-all">{usserData.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="group p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-600 mb-1">Username</p>
                        <p className="text-gray-900 font-medium break-all">@{usserData.username}</p>
                      </div>
                    </div>
                  </div>

                  {/* Department */}
                  <div className="group p-5 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-600 mb-1">Department</p>
                        <p className="text-gray-900 font-medium capitalize">{usserData.department}</p>
                      </div>
                    </div>
                  </div>

                  {/* Name (if available) */}
                  {usserData.name && (
                    <div className="group p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Full Name</p>
                          <p className="text-gray-900 font-medium capitalize">{usserData.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Actions
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/sendpdf">
                  <button className="w-full p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-left group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Upload PDF</p>
                        <p className="text-xs text-gray-600">Share materials</p>
                      </div>
                    </div>
                  </button>
                </Link>

                <Link to="/branchdeaprtemntyear">
                  <button className="w-full p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-left group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Browse Docs</p>
                        <p className="text-xs text-gray-600">Find resources</p>
                      </div>
                    </div>
                  </button>
                </Link>

                <Link to="/userlogedout">
                  <button className="w-full p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-left group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg shadow group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Logout</p>
                        <p className="text-xs text-gray-600">Sign out</p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Infouserfron;