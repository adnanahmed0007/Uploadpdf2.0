 import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img from './iimhyjhydd.jpeg';
import Logout from './Authentication/Logout';
import { useTheme } from './Authentication/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-b border-gray-200/50 dark:border-slate-800/50 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-300">
            <div className="relative">
              <img
                src={img}
                alt="IIMT University"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500 shadow-lg group-hover:ring-4 group-hover:ring-purple-500 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                IIMT University
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Digital Archive Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/" label="Home" icon="🏠" isActive={isActive('/')} />
            <NavLink to="/sendpdf" label="Upload" icon="📤" isActive={isActive('/sendpdf')} />

            {/* Browse Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsBrowseOpen(true)}
                onMouseLeave={() => setIsBrowseOpen(false)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  ['/branchdeaprtemntyear', '/userdepartmentpdf', '/notessubjectwise', '/getallview'].includes(location.pathname)
                    ? 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>📚</span>
                <span>Browse</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isBrowseOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setIsBrowseOpen(true)}
                onMouseLeave={() => setIsBrowseOpen(false)}
                className={`absolute top-full left-0 mt-2 w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-800 overflow-hidden transition-all duration-300 ${
                  isBrowseOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-2 space-y-1">
                  <DropdownLink
                    to="/branchdeaprtemntyear"
                    label="By Dept/Year/Branch"
                    icon="🎓"
                    description="Browse by all filters"
                    isActive={isActive('/branchdeaprtemntyear')}
                  />
                  <DropdownLink
                    to="/userdepartmentpdf"
                    label="By Department & Year"
                    icon="📖"
                    description="Filter by dept and year"
                    isActive={isActive('/userdepartmentpdf')}
                  />
                  <DropdownLink
                    to="/notessubjectwise"
                    label="By Subject"
                    icon="📝"
                    description="Find subject-wise notes"
                    isActive={isActive('/notessubjectwise')}
                  />
                  <DropdownLink
                    to="/getallview"
                    label="All Documents"
                    icon="📂"
                    description="View complete archive"
                    isActive={isActive('/getallview')}
                  />
                </div>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300 dark:bg-slate-700 mx-2"></div>

            <NavLink to="/userInfo" label="Profile" icon="👤" isActive={isActive('/userInfo')} />
            <Logout />

            <Link to="/login">
              <button className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>🔐</span>
                <span>Login</span>
              </button>
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center border border-gray-200/60 dark:border-slate-700"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-amber-400 transition-colors"
            >
              <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
          <div className="space-y-2 pt-4">
            <MobileNavLink to="/" label="Home" icon="🏠" onClick={() => setIsMenuOpen(false)} isActive={isActive('/')} />
            <MobileNavLink to="/sendpdf" label="Upload PDF" icon="📤" onClick={() => setIsMenuOpen(false)} isActive={isActive('/sendpdf')} />

            {/* Mobile Browse Section */}
            <div className="pt-2">
              <div className="px-4 py-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Browse Materials
              </div>
              <div className="space-y-1 pl-2">
                <MobileNavLink to="/branchdeaprtemntyear" label="Dept/Year/Branch" icon="🎓" onClick={() => setIsMenuOpen(false)} isActive={isActive('/branchdeaprtemntyear')} />
                <MobileNavLink to="/userdepartmentpdf" label="Department & Year" icon="📖" onClick={() => setIsMenuOpen(false)} isActive={isActive('/userdepartmentpdf')} />
                <MobileNavLink to="/notessubjectwise" label="By Subject" icon="📝" onClick={() => setIsMenuOpen(false)} isActive={isActive('/notessubjectwise')} />
                <MobileNavLink to="/getallview" label="All Documents" icon="📂" onClick={() => setIsMenuOpen(false)} isActive={isActive('/getallview')} />
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-slate-800 my-2"></div>

            <MobileNavLink to="/userInfo" label="Profile" icon="👤" onClick={() => setIsMenuOpen(false)} isActive={isActive('/userInfo')} />
            <MobileNavLink to="/signup" label="Sign Up" icon="✍️" onClick={() => setIsMenuOpen(false)} isActive={isActive('/signup')} />
            <MobileNavLink to="/login" label="Login" icon="🔐" onClick={() => setIsMenuOpen(false)} isPrimary />

            <div className="px-2">
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, label, icon, isActive }) => (
  <Link
    to={to}
    className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
      isActive
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 shadow-sm'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </Link>
);

// Dropdown Link Component
const DropdownLink = ({ to, label, icon, description, isActive }) => (
  <Link
    to={to}
    className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      isActive
        ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40 text-blue-600 dark:text-blue-400'
        : 'hover:bg-gray-50 dark:hover:bg-slate-800/60'
    }`}
  >
    <span className={`text-2xl transition-transform duration-200 group-hover:scale-110 ${isActive ? 'animate-bounce' : ''}`}>
      {icon}
    </span>
    <div className="flex-1 min-w-0">
      <div className={`font-semibold ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'}`}>
        {label}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        {description}
      </div>
    </div>
    {isActive && (
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
      </div>
    )}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, label, icon, onClick, isPrimary, isActive }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
      isPrimary
        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl'
        : isActive
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
    {isActive && !isPrimary && (
      <span className="ml-auto">
        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></div>
      </span>
    )}
  </Link>
);

export default Header;
