import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Email fill kro.");
      return;
    }

    if (password.length !== 10) {
      alert("Password 10 digit only.");
      return;
    }

    // ✅ Navigate to next page
    navigate('/foodmenu');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
      </div>

      
      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-10 shadow-xl">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center text-orange-700">Food Login</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={10}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="10-digit password"
                required
              />
              {password.length > 0 && password.length !== 10 && (
                <p className="text-red-500 text-sm mt-1">Password must be exactly 10 characters.</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-colors duration-300 text-white py-2 rounded-lg text-lg font-semibold shadow-md"
            >
              Login
            </button>
          </form>

          {/* Sign-up Link */}
          <p className="mt-6 text-center text-gray-500 text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-orange-600 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodLoginPage;
