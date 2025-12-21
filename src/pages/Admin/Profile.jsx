import React, { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Security', 'Notifications'];

  return (
    <div className="font-clash pt-8">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-medium text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 w-fit p-1 rounded-b-sm gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? 'bg-white text-teal-600 shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-white/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Information Card */}
        {activeTab === 'Profile' && (
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Profile Information</h2>

            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900">Sheikh Abdullah Omar</h3>
                <p className="text-gray-700">Administrator</p>
                <p className="text-sm text-gray-500">Member since 10/11/2013</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex-1 min-w-[300px] md:min-w-[400px]">
                <label className="block text-gray-900 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Sheikh Abdullah Omar"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex-1 min-w-[300px] md:min-w-[400px]">
                <label className="block text-gray-900 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="admin@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex-1 min-w-[300px] md:min-w-[400px]">
                <label className="block text-gray-900 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+2345678904567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex-1 min-w-[300px] md:min-w-[400px]">
                <label className="block text-gray-900 font-medium mb-2">Role</label>
                <input
                  type="text"
                  defaultValue="Administrator"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-500"
                  disabled
                />
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
              <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors">
                Update Profile
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'Security' && (
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Security Settings</h2>
            
            {/* Last Login */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-900 font-medium mb-1">Last Login</p>
                <p className="text-sm text-gray-500">11/12/2024 10:30 AM</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            {/* Change Password */}
            <h3 className="text-xl font-medium text-gray-900 mb-6">Change Password</h3>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-gray-900 font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            {/* Change Password Button */}
            <div className="flex justify-end">
              <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors">
                Change Password
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'Notifications' && (
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-8">Notification Preferences</h2>
            
            <div className="space-y-4">
              {/* Email Notifications */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Sms Notifications</h3>
                  <p className="text-sm text-gray-500">Receive notifications via Sms</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {/* Push Notifications */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Push Notifications</h3>
                  <p className="text-sm text-gray-500">Receive push notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {/* Weekly Reports */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Weekly Reports</h3>
                  <p className="text-sm text-gray-500">Get weekly summary reports</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {/* System Alerts */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">System Alerts</h3>
                  <p className="text-sm text-gray-500">Receive system maintenance alerts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
