import React from 'react'
import axios from 'axios'

const Logout = () => {
  async function Handlseclick() {
    try {
      const data_back = await axios.get("https://uploadpdf2-0-3.onrender.com/authenttication/user/logout", { withCredentials: true });
      if (data_back) {
        alert(data_back.data.message);
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message + " " + "first login then logout");
      }
    }
  }

  return (
    <div className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
      <button
        onClick={Handlseclick}
        className="w-full py-3 px-6 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
