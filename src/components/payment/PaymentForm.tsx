import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface PaymentFormProps {
  onComplete: (amount: string) => void;
}

export function PaymentForm({ onComplete }: PaymentFormProps) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(amount);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <div className="rounded-full bg-blue-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <DollarSign className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Ingresa el Monto</h2>
        <p className="text-gray-600 mt-2">Por favor, especifica el monto que deseas pagar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monto</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              required
              min="0.01"
              step="0.01"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">MXN</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Continuar a Verificación
        </button>
      </form>
    </div>
  );
}