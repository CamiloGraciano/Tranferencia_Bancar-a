import React, { useState } from 'react';
import { PaymentSelection } from './components/payment/PaymentSelection';
import { PaymentForm } from './components/payment/PaymentForm';
import { PaymentConfirmation } from './components/payment/PaymentConfirmation';
import { BiometricVerification } from './components/verification/BiometricVerification';
import { SuccessMessage } from './components/common/SuccessMessage';

type Step = 'selection' | 'payment' | 'confirmation' | 'verification' | 'success';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('selection');
  const [paymentDetails, setPaymentDetails] = useState({
    type: '',
    recipient: '',
    amount: ''
  });

  const renderStep = () => {
    switch (currentStep) {
      case 'selection':
        return (
          <PaymentSelection 
            onComplete={(type, recipient) => {
              setPaymentDetails(prev => ({ ...prev, type, recipient }));
              setCurrentStep('payment');
            }} 
          />
        );
      case 'payment':
        return (
          <PaymentForm 
            onComplete={(amount) => {
              setPaymentDetails(prev => ({ ...prev, amount }));
              setCurrentStep('confirmation');
            }}
          />
        );
      case 'confirmation':
        return (
          <PaymentConfirmation
            paymentDetails={paymentDetails}
            onConfirm={() => setCurrentStep('verification')}
            onEdit={() => setCurrentStep('selection')}
          />
        );
      case 'verification':
        return <BiometricVerification onComplete={() => setCurrentStep('success')} />;
      case 'success':
        return (
          <SuccessMessage
            transactionId="TXN123456789"
            amount={paymentDetails.amount}
            recipient={paymentDetails.recipient}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            {['selection', 'payment', 'confirmation', 'verification', 'success'].map((step, index) => (
              <React.Fragment key={step}>
                {index > 0 && (
                  <div className="w-12 h-0.5 self-center bg-gray-200">
                    <div
                      className={`h-full ${
                        ['selection', 'payment', 'confirmation', 'verification', 'success'].indexOf(currentStep) >= index
                          ? 'bg-blue-600'
                          : ''
                      }`}
                    />
                  </div>
                )}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === step
                      ? 'bg-blue-600 text-white'
                      : ['selection', 'payment', 'confirmation', 'verification', 'success'].indexOf(currentStep) > ['selection', 'payment', 'confirmation', 'verification', 'success'].indexOf(step)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
}

export default App;