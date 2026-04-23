import React, { useState, useContext } from 'react';
import MyContext from '../Mycontext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { email, setEmail, password, setPassword } = useContext(MyContext);
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
        {
          email,
          password
        },
        { withCredentials: true }
      );

      console.log(data_Get);

      if (data_Get) {
        alert(data_Get.data.message);
        setDta(data_Get.data.findOne);

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        console.log(e);
        alert(e.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Welcome Back
            </h1>
            <p className="text-gray-600 max-w-sm mx-auto">
              Login to access your academic resources and continue your learning journey
            </p>
          </div>

          {/* Login Card */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
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
            <Link to="/signup" className="block mt-6 text-center text-blue-600 font-semibold">
              Create New Account
            </Link>
          </div>

          {/* User Details Card */}
          {dataget_login && (
            <div className="mt-6 backdrop-blur-xl bg-white/80 rounded-2xl shadow-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Login Successful
              </h3>

              <div className="space-y-2 text-sm">
                <div>
                  <strong>Email:</strong> {dataget_login.email}
                </div>
                <div>
                  <strong>Username:</strong> {dataget_login.username}
                </div>
                <div>
                  <strong>Department:</strong> {dataget_login.department}
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
