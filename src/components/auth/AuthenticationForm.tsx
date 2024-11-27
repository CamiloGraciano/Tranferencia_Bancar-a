import React, { useState } from 'react';
import { KeyRound, Smartphone, Fingerprint } from 'lucide-react';

type AuthMethod = 'email' | 'phone' | 'biometric';

export function AuthenticationForm() {
  const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => setAuthMethod('email')}
          className={`p-3 rounded-full ${
            authMethod === 'email' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <KeyRound className="w-6 h-6" />
        </button>
        <button
          onClick={() => setAuthMethod('phone')}
          className={`p-3 rounded-full ${
            authMethod === 'phone' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <Smartphone className="w-6 h-6" />
        </button>
        <button
          onClick={() => setAuthMethod('biometric')}
          className={`p-3 rounded-full ${
            authMethod === 'biometric' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
          }`}
        >
          <Fingerprint className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {authMethod === 'email' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        )}

        {authMethod === 'phone' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        )}

        {authMethod === 'biometric' && (
          <div className="text-center">
            <Fingerprint className="w-16 h-16 mx-auto text-blue-600" />
            <p className="mt-2 text-sm text-gray-600">Use biometric authentication</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
}