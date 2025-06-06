import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interested in finding out more?
          </h2>
          <p className="text-xl text-gray-600">
            Email us at{' '}
            <a 
              href="mailto:adrian@vidzero.com.au" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              adrian@vidzero.com.au
            </a>
            {' '}to learn more or join our early access group.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 