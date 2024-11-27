// src/components/UserHome.js
import React, { useEffect, useState, useCallback } from 'react';
import { Home, Send, CreditCard, TrendingUp, Settings, LogOut } from 'lucide-react';
import PaymentForm from './PaymentForm';
import Statements from './Statements';
import FinancialInsights from './FinancialInsights';
import { getBalanceAndTransactions, getUserProfile } from '../api';
import { useNavigate } from 'react-router-dom';

const UserHome = ({ token }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [accountNumber, setAccountNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const fetchUserData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const balanceResponse = await getBalanceAndTransactions(token);
      setBalance(balanceResponse.data.balance);
      setTransactions(balanceResponse.data.transactions);

      const profileResponse = await getUserProfile(token);
      setAccountNumber(profileResponse.data.accountNumber);
      setUserName(`${profileResponse.data.name} ${profileResponse.data.surname}`);
    } catch (error) {
      setError('Could not load data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'makePayment', label: 'Make a Payment', icon: Send },
    { id: 'statements', label: 'Statements', icon: CreditCard },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`flex flex-col ${
          sidebarExpanded ? 'w-64' : 'w-20'
        } bg-white transition-all duration-300 shadow-md`}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="text-white text-2xl font-bold">
            {sidebarExpanded ? 'Customer Portal' : 'CP'}
          </div>
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="text-white focus:outline-none"
          >
            {/* Icon to toggle sidebar */}
            {sidebarExpanded ? '⮜' : '⮞'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {tabs.map((tab) => (
              <li key={tab.id} className="relative">
                <button
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center w-full px-4 py-2 ${
                    selectedTab === tab.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                  {sidebarExpanded && (
                    <span className="ml-4 text-sm font-medium">{tab.label}</span>
                  )}
                </button>
                {selectedTab === tab.id && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-orange-500"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-100"
          >
            <LogOut className="w-6 h-6" />
            {sidebarExpanded && (
              <span className="ml-4 text-sm font-medium">Logout</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between h-16 px-6 bg-white shadow-sm">
          <div>
            <h1 className="text-2xl font-semibold text-orange-600 capitalize">
              {selectedTab.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, {userName}</span>
            {/* User Avatar */}
            <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
              {userName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <svg
                className="animate-spin h-10 w-10 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <>
              {selectedTab === 'dashboard' && (
                <div>
                  {/* Dashboard Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Balance Card */}
                    <div className="bg-white shadow rounded-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Account Balance
                      </h2>
                      <p className="text-4xl font-bold text-orange-600">
                        R{balance.toFixed(2)}
                      </p>
                    </div>

                    {/* Account Details */}
                    <div className="bg-white shadow rounded-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Account Number
                      </h2>
                      <p className="text-2xl font-semibold text-gray-800">
                        {accountNumber}
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white shadow rounded-lg p-6">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Quick Actions
                      </h2>
                      <div className="space-y-2">
                        <button
                          onClick={() => setSelectedTab('makePayment')}
                          className="w-full flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Make a Payment
                        </button>
                        <button
                          onClick={() => setSelectedTab('statements')}
                          className="w-full flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                        >
                          <CreditCard className="w-5 h-5 mr-2" />
                          View Statements
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                      Recent Transactions
                    </h2>
                    <div className="bg-white shadow rounded-lg">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100 text-left text-gray-600">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Description</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.slice(0, 5).map((transaction) => (
                            <tr key={transaction._id} className="border-b">
                              <td className="py-2 px-4">
                                {new Date(transaction.createdAt).toLocaleDateString()}
                              </td>
                              <td className="py-2 px-4">{transaction.displayText}</td>
                              <td
                                className={`py-2 px-4 ${
                                  transaction.transactionType === 'incoming'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                }`}
                              >
                                R{transaction.amount}
                              </td>
                              <td className="py-2 px-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs ${
                                    transaction.status === 'Approved'
                                      ? 'bg-green-100 text-green-600'
                                      : 'bg-yellow-100 text-yellow-600'
                                  }`}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="p-4 text-right">
                        <button
                          onClick={() => setSelectedTab('statements')}
                          className="text-orange-600 hover:underline"
                        >
                          View All Transactions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'makePayment' && (
                <PaymentForm
                  token={token}
                  onTransactionUpdate={fetchUserData}
                  balance={balance}
                />
              )}

              {selectedTab === 'statements' && (
                <Statements transactions={transactions} />
              )}

              {selectedTab === 'insights' && (
                <FinancialInsights transactions={transactions} />
              )}

              {selectedTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    Settings
                  </h2>
                  {/* Settings Form */}
                  <form className="space-y-6 max-w-lg">
                    <div>
                      <label className="block text-gray-700">First Name</label>
                      <input
                        type="text"
                        value={userName.split(' ')[0]}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Last Name</label>
                      <input
                        type="text"
                        value={userName.split(' ')[1]}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Account Number</label>
                      <input
                        type="text"
                        value={accountNumber}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                        disabled
                      />
                    </div>
                    {/* Additional settings can be added here */}
                  </form>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserHome;
