 import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogOut, X, AlertTriangle, Loader2 } from 'lucide-react';
import MyContext from '../Mycontext';

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  // Consume Context to update auth state globally
  const { setIsLoggedIn } = useContext(MyContext);

  async function handleClick() {
    setLoading(true);
    setFeedback({ type: '', message: '' });

    try {
      const response = await axios.get(
        "https://uploadpdf2-0-1.onrender.com/authenttication/user/logout",
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Clear local storage and update context
        localStorage.removeItem("token");
        if (setIsLoggedIn) {
          setIsLoggedIn(false);
        }

        setFeedback({
          type: 'success',
          message: response.data.message || "Successfully logged out!",
        });
        
        setTimeout(() => {
          setShowConfirm(false);
          navigate('/login');
        }, 1200);
      }
    } catch (e) {
      console.error(e);
      let errorMsg = "Logout failed. Please try again.";
      if (e.response && (e.response.status === 400 || e.response.status === 401)) {
        errorMsg = `${e.response.data.message || 'Session expired.'} Please login again.`;
      }
      
      setFeedback({ type: 'error', message: errorMsg });
    } finally {
      setLoading(false);
    }
  }

  const handleClose = () => {
    if (!loading) {
      setShowConfirm(false);
      setFeedback({ type: '', message: '' });
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setShowConfirm(true)}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 py-2 px-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <LogOut size={16} />
        Log Out
      </button>

      {/* Confirmation Modal Overlay */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden transition-all transform animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 pb-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/40">
                <AlertTriangle size={22} className="text-red-500 dark:text-red-400" />
              </div>
              <button
                onClick={handleClose}
                disabled={loading}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-40"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 pt-4 pb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Log out of your account?
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                You will be signed out on this device. Any unsaved progress will be lost, and you'll need to log back in.
              </p>

              {/* Status Feedback Alerts */}
              {feedback.message && (
                <div
                  className={`mt-4 p-3 rounded-xl text-xs font-medium border flex items-center gap-2 ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                      : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
                  }`}
                >
                  {feedback.type === 'success' ? '✓' : '⚠️'} {feedback.message}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 px-6 pb-6">
              <button
                onClick={handleClose}
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClick}
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Logging out...</span>
                  </>
                ) : (
                  <>
                    <LogOut size={16} />
                    <span>Yes, Log Out</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
