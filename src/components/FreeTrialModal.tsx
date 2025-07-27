import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from 'lucide-react';

const FreeTrialModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <Button 
        variant="hero" 
        size="lg" 
        className="text-lg px-8 py-6"
        onClick={() => setIsOpen(true)}
      >
        Try It Free
        <ArrowRight className="ml-2" />
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div 
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            {/* Form Title */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              Apply For 7 Days Free Trial
            </h2>

{/* Compact Form */}
<form className="space-y-3">
  <div>
    <input
      type="text"
      aria-label="Name"
      placeholder="Name"
      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  </div>

  <div>
    <input
      type="email"
      aria-label="Email"
      placeholder="Email"
      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  </div>

  <div>
    <input
      type="tel"
      aria-label="Phone Number"
      placeholder="Phone No"
      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  </div>

  <div>
    <input
      type="number"
      aria-label="Age"
      placeholder="Age"
      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  </div>

  <div>
    <textarea
      aria-label="Message"
      placeholder="Message"
      rows={2}
      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    ></textarea>
  </div>

  <div className="flex justify-between pt-2">
    <Button
      type="button"
      variant="outline"
      onClick={() => setIsOpen(false)}
      className="px-4 py-1.5 text-sm"
    >
      Close
    </Button>
    <Button
      type="submit"
      variant="hero"
      className="px-4 py-1.5 text-sm"
    >
      Submit
    </Button>
  </div>
</form>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeTrialModal;