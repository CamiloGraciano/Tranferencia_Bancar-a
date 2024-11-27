import React, { useState } from 'react';
import { Fingerprint, Scan } from 'lucide-react';

interface BiometricVerificationProps {
  onComplete: () => void;
}

export function BiometricVerification({ onComplete }: BiometricVerificationProps) {
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBiometricAuth = async () => {
    setVerifying(true);
    setError(null);

    try {
      // Simulate biometric verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      onComplete();
    } catch (err) {
      setError('La verificación biométrica falló. Por favor, intenta de nuevo.');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="rounded-full bg-blue-100 p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          {verifying ? (
            <Scan className="w-10 h-10 text-blue-600 animate-pulse" />
          ) : (
            <Fingerprint className="w-10 h-10 text-blue-600" />
          )}
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Verificación Biométrica</h2>
        <p className="text-gray-600 mt-2">
          {verifying
            ? 'Escaneando tu huella digital...'
            : 'Por favor, verifica tu identidad usando tu huella digital'}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        onClick={handleBiometricAuth}
        disabled={verifying}
        className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          verifying
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        } transition-colors`}
      >
        {verifying ? (
          'Verificando...'
        ) : (
          <>
            <Fingerprint className="w-5 h-5 mr-2" />
            Verificar con Huella Digital
          </>
        )}
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        ¿Tienes problemas? Contacta a soporte para asistencia
      </p>
    </div>
  );
}