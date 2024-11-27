import React, { useState } from 'react';
import { Building2, Wallet } from 'lucide-react';

type PaymentType = 'bank' | 'service';

interface PaymentSelectionProps {
  onComplete: (type: PaymentType, recipient: string) => void;
}

export function PaymentSelection({ onComplete }: PaymentSelectionProps) {
  const [paymentType, setPaymentType] = useState<PaymentType>('bank');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(paymentType, recipient);
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Seleccionar Tipo de Pago</h2>
        <p className="text-gray-600 mt-2">Elige cómo deseas realizar tu pago</p>
      </div>
      
      <div className="mb-6 flex justify-center space-x-6">
        <button
          type="button"
          onClick={() => setPaymentType('bank')}
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${
            paymentType === 'bank' 
              ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
              : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
          }`}
        >
          <Building2 className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Cuenta Bancaria</span>
        </button>
        <button
          type="button"
          onClick={() => setPaymentType('service')}
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${
            paymentType === 'service' 
              ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
              : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
          }`}
        >
          <Wallet className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Pago de Servicios</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {paymentType === 'bank' ? 'Número de Cuenta' : 'Proveedor de Servicio'}
          </label>
          <input
            type={paymentType === 'bank' ? 'number' : 'text'}
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder={paymentType === 'bank' ? 'Ingresa el número de cuenta' : 'Selecciona el proveedor de servicio'}
            required
          />
          {paymentType === 'bank' && (
            <p className="mt-1 text-sm text-gray-500">
              Ingresa el número de cuenta del destinatario
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Continuar
        </button>
      </form>
    </div>
  );
}