// src/components/Home.js
import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Secure Foreign Payments",
      description: "Facilitate secure transactions with international partners effortlessly.",
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: "Easy International Payments",
      description: "Send and receive payments globally with just a few clicks.",
    },
    {
      icon: <Send className="w-8 h-8 text-red-500" />,
      title: "Instant Transfers",
      description: "Experience lightning-fast transfers with our optimized network.",
    },
  ];

  const developers = [
    {
      name: 'Hayley Hananiah Chetty',
      role: 'Lead Developer',
    },
    {
      name: 'Mohammed Althaaf Goolam',
      role: 'Backend Specialist',
    },
    {
      name: 'Keziah Padyachie',
      role: 'Frontend Engineer',
    },
    {
      name: 'Sumit Raghavjee',
      role: 'UI/UX Designer',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-red-700 text-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">
          <Link to="/">Customer Portal</Link>
        </div>
        <div className="space-x-6">
          <Link to="/login" className="hover:text-gray-200 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200 transition duration-300">
            Register
          </Link>
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-6">
          Banking Made <span className="text-orange-200">Global</span>
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Welcome to Customer Portal, your trusted partner for secure and efficient international banking solutions tailored to your needs.
        </p>
        <Link to="/login">
          <button className="flex items-center px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </Link>
      </header>

      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Customer Portal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {developers.map((developer, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-red-500">
                    {developer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{developer.name}</h3>
                <p className="text-gray-700">{developer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Customer Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
