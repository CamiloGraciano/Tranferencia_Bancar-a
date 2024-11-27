import React from 'react';
import { ClipboardCheck } from 'lucide-react';

interface PaymentConfirmationProps {
  paymentDetails: {
    type: string;
    recipient: string;
    amount: string;
  };
  onConfirm: () => void;
  onEdit: () => void;
}

export function PaymentConfirmation({ paymentDetails, onConfirm, onEdit }: PaymentConfirmationProps) {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-6">
        <div className="rounded-full bg-blue-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <ClipboardCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Confirmar Detalles del Pago</h2>
        <p className="text-gray-600 mt-2">Por favor, revisa la información de tu pago</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Tipo de Pago</span>
            <span className="font-medium text-gray-900 capitalize">
              {paymentDetails.type === 'bank' ? 'Cuenta Bancaria' : 'Pago de Servicios'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Destinatario</span>
            <span className="font-medium text-gray-900">{paymentDetails.recipient}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monto</span>
            <span className="font-medium text-gray-900">${paymentDetails.amount}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onConfirm}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Confirmar y Continuar
        </button>
        <button
          onClick={onEdit}
          className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Editar Detalles del Pago
        </button>
      </div>
    </div>
  );
}