// ThankYouPage.js
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Thank You for Submission!</h2>
        <p className="text-gray-600">
          We appreciate your submission. Your form has been successfully submitted.
        </p>
        {/* Add any additional content or components you want to display */}
      </div>
    </div>
  );
};

export default ThankYouPage;
