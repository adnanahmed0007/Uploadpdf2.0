 import React, { useState } from 'react'
import axios from 'axios'
import { LogOut, X, AlertTriangle } from 'lucide-react'

const Logout = () => {
  const [loading, setLoading] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const data_back = await axios.get(
        "https://uploadpdf2-0-1.onrender.com/authenttication/user/logout",
        { withCredentials: true }
      )
      if (data_back) {
        alert(data_back.data.message)
      }
    } catch (e) {
      console.log(e)
      if (e.response && (e.response.status === 400 || e.response.status === 401)) {
        alert(e.response.data.message + " " + "first login then logout")
      }
    } finally {
      setLoading(false)
      setShowConfirm(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 py-2 px-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <LogOut size={16} />
        {loading ? "Logging out..." : "Log Out"}
      </button>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
                <AlertTriangle size={22} className="text-red-500" />
              </div>
              <button
                onClick={() => setShowConfirm(false)}
                disabled={loading}
                className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 pt-4 pb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Are you sure you want to log out?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                You'll be signed out of your account on this device. Any unsaved changes may be lost, and you'll need to log in again to access your dashboard.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 px-6 pb-6">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleClick}
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                {loading ? "Logging out..." : "Yes, Log Out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Logout
