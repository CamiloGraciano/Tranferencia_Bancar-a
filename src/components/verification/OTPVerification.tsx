import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface OTPVerificationProps {
  onComplete: () => void;
}

export function OTPVerification({ onComplete }: OTPVerificationProps) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <Shield className="w-12 h-12 mx-auto text-blue-600" />
        <h2 className="mt-2 text-xl font-semibold text-gray-900">Verify Payment</h2>
        <p className="mt-2 text-sm text-gray-600">
          We've sent a verification code to your device
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Verification Code</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter 6-digit code"
            maxLength={6}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Verify and Complete Payment
        </button>

        <p className="mt-2 text-center text-sm text-gray-600">
          Didn't receive the code?{' '}
          <button type="button" className="text-blue-600 hover:text-blue-500">
            Resend
          </button>
        </p>
      </form>
    </div>
  );
}