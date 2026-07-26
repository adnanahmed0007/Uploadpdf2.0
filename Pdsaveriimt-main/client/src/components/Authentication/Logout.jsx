 import React, { useState } from 'react'
import axios from 'axios'
import { LogOut } from 'lucide-react'

const Logout = () => {
  const [loading, setLoading] = useState(false)

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
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message + " " + "first login then logout")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
    >
      <LogOut size={18} />
      {loading ? "Logging out..." : "Log Out"}
    </button>
  )
}

export default Logout
