import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About E-Store</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">E-Store</span>, Your one-stop destination for the latest and trendiest in fashion. From statement outfits to essential accessories, we’re here to elevate your style with premium collections and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At E-Store, Our mission is to make trend-forward fashion accessible to everyone. We’re passionate about connecting people with stylish, high-quality clothing and accessories — all at affordable prices, delivered with care and confidence.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose E-Store?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top-quality products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where new trends elevates everyday life. At E-Store, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the E-Store Family</h3>
          <p className="text-gray-700 mb-4">
            Whether you’re a Zen-G, a professional, or just looking for something cool and trending — E-Store has something for everyone.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;