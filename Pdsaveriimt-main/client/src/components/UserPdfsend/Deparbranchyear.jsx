 import React, { useState } from 'react';
import axios from 'axios';

const Deparbranchyear = () => {
  const [department, setDepartment] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsSearched(true);

    try {
      const response = await axios.post("https://uploadpdf2-0-1.onrender.com/user/pdf/get/pdf", {
        department: department.trim().toLowerCase(),
        branch: branch.trim().toLowerCase(),
        year: year,
      }, { withCredentials: true });

      if (response && response.status === 200) {
        setArray(response.data.findPdf);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message);
        console.log(e);
      } else {
        alert("Server error");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handledownload(pdfName) {
    try {
      const encodedPdfName = encodeURIComponent(pdfName);

      const response = await axios.get(
        `https://uploadpdf2-0-1.onrender.com/user/pdf/get/downloadpdf/${encodedPdfName}`,
        {
          withCredentials: true,
          responseType: "blob",
        }
      );

      const contentType = response.headers['content-type'];
      if (contentType !== 'application/pdf') {
        throw new Error("The file is not a valid PDF.");
      }

      const url = window.URL.createObjectURL(new Blob([response.data], { type: contentType }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", pdfName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      console.log("Download successful", response);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download PDF. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
            <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Advanced Search
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Filter documents by department, branch, and academic year
          </p>
        </div>

        {/* Search Form Card */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/40 p-8 mb-8 animate-fadeInUp max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Department */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Department
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <select
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">Select department</option>
                      <option value="btech">B.Tech</option>
                      <option value="bca">BCA</option>
                      <option value="bsc">B.Sc</option>
                      <option value="bcom">B.Com</option>
                      <option value="ba">BA</option>
                      <option value="mba">MBA</option>
                      <option value="mca">MCA</option>
                      <option value="msc">M.Sc</option>
                      <option value="mtech">M.Tech</option>
                      <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Branch */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Branch
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <select
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">Select branch (optional)</option>
                      <option value="cse">CSE - Computer Science Engineering</option>
                      <option value="it">IT - Information Technology</option>
                      <option value="ece">ECE - Electronics & Communication</option>
                      <option value="eee">EEE - Electrical & Electronics</option>
                      <option value="me">ME - Mechanical Engineering</option>
                      <option value="ce">CE - Civil Engineering</option>
                      <option value="csai">CSE (AI & ML)</option>
                      <option value="csds">CSE (Data Science)</option>
                      <option value="cse-iot">CSE (IoT)</option>
                      <option value="biotech">Biotechnology</option>
                      <option value="other">Other</option>
                    </select>
                </div>
              </div>

              {/* Year */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Year
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <select
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl dark:hover:shadow-purple-900/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span>Apply Filters</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {isSearched && (
          <div className="animate-fadeInUp">
            {array.length > 0 ? (
              <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/40 p-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-black text-gray-800 dark:text-gray-50 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Found {array.length} {array.length === 1 ? 'Document' : 'Documents'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-950/50 dark:to-blue-900/50 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold capitalize">
                      {department}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-950/50 dark:to-purple-900/50 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold uppercase">
                      {branch}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-950/50 dark:to-pink-900/50 text-pink-700 dark:text-pink-400 rounded-full text-sm font-semibold">
                      Year {year}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {array.map((value, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl dark:hover:shadow-black/40 hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        {/* Left Side - Info */}
                        <div className="flex-1 space-y-3">
                          {/* Student Name */}
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Student</p>
                              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 capitalize">{value.Student_Name}</p>
                            </div>
                          </div>

                          {/* File Name */}
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-950/50 rounded-lg flex-shrink-0">
                              <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">File Name</p>
                              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 break-all">{value.FileNampdfuser}</p>
                            </div>
                          </div>

                          {/* Tags Row */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-400 rounded-full text-xs font-semibold capitalize">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {value.department}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold uppercase">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                              {value.branch}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 rounded-full text-xs font-semibold">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Year {value.year}
                            </span>
                          </div>
                        </div>

                        {/* Right Side - Download Button */}
                        {value.pdfFile && (
                          <button
                            onClick={() => handledownload(value.FileNampdfuser)}
                            className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 text-white font-bold rounded-xl hover:shadow-xl dark:hover:shadow-emerald-900/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // No Results Found
              <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/40 p-12 text-center">
                <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                  <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-3">No Documents Found</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any documents matching your filters:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold capitalize">{department}</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold uppercase">{branch}</span>
                  <span className="px-4 py-2 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-400 rounded-full text-sm font-semibold">Year {year}</span>
                </div>
                <button
                  onClick={() => {
                    setIsSearched(false);
                    setDepartment("");
                    setBranch("");
                    setYear("");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg dark:hover:shadow-purple-900/50 hover:scale-105 transition-all duration-300"
                >
                  Try Another Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #9333ea);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default Deparbranchyear;
