'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: 'Admin',
    lastName: '',
    username: 'admin',
    phone: '',
    email: 'admin@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: 'en',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle avatar upload
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Delete avatar
  const handleDeleteAvatar = () => {
    setAvatar(null);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: add save logic (API or localStorage)
    alert('Profile updated!');
  };

  // Handle logout
  const handleLogout = () => {
    // TODO: Add logout logic
    alert('Logged out!');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow space-y-6">
      {/* Avatar and Name */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">No Avatar</div>
          )}
        </div>
        <h2 className="text-xl font-semibold">{form.firstName} {form.lastName || ''}</h2>

        {/* Upload / Delete Buttons */}
        <div className="flex space-x-4">
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Photo
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleDeleteAvatar}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Photo
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium" htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="+251 ..."
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Password Change */}
        <div className="border-t pt-4 space-y-4">
          <h3 className="font-semibold text-lg">Change Password</h3>
          <div>
            <label className="block mb-1 font-medium" htmlFor="currentPassword">Current Password</label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={form.currentPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              autoComplete="current-password"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              autoComplete="new-password"
            />
          </div>
        </div>

        {/* Language Selector */}
        <div className="border-t pt-4">
          <label htmlFor="language" className="block mb-1 font-medium">Language</label>
          <select
            id="language"
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="en">English</option>
            <option value="am">Amharic</option>
          </select>
        </div>

        {/* Logout Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </div>

        {/* Save Changes */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
