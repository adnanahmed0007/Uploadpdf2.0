 import React, { useState, useContext } from 'react';
import MyContext from '../Mycontext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // 1. Pull setIsLoggedIn from Context
  const { email, setEmail, password, setPassword, setIsLoggedIn } = useContext(MyContext);
  const [dataget_login, setDta] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data_Get = await axios.post(
        "https://uploadpdf2-0-1.onrender.com/authenttication/login",
        { email, password },
        { withCredentials: true }
      );

      console.log(data_Get);

      if (data_Get) {
        alert(data_Get.data.message);
        setDta(data_Get.data.user);

        // 2. Store session/token in localStorage
        localStorage.setItem("token", data_Get.data.token || "logged_in");

        // 3. Update global login state so Header updates immediately
        if (setIsLoggedIn) {
          setIsLoggedIn(true);
        }

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (e) {
      console.log(e);
      if (e.response && (e.response.status === 400 || e.response.status === 401)) {
        alert(e.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-3">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
              Login to access your academic resources and continue your learning journey
            </p>
          </div>

          {/* Login Card */}
          <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-800 p-8 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-16"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Signup Link */}
            <Link to="/signup" className="block mt-6 text-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Create New Account
            </Link>
          </div>

          {/* User Details Card */}
          {dataget_login && (
            <div className="mt-6 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-2xl border border-white/20 dark:border-slate-800 p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Login Successful
              </h3>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Email:</strong> {dataget_login.email}
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Username:</strong> {dataget_login.username}
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Department:</strong> {dataget_login.department}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
