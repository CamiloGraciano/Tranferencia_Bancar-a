import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  transactionId: string;
  amount: string;
  recipient: string;
}

export function SuccessMessage({ transactionId, amount, recipient }: SuccessMessageProps) {
  return (
    <div className="w-full max-w-md text-center">
      <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">¡Pago Exitoso!</h2>
      <p className="text-gray-600 mb-6">Tu transacción ha sido completada</p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Monto</span>
            <span className="font-medium">${amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Destinatario</span>
            <span className="font-medium">{recipient}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ID de Transacción</span>
            <span className="font-medium">{transactionId}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Descargar Recibo
      </button>
    </div>
  );
}