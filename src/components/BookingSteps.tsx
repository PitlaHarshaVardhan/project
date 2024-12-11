import { ClipboardList, Users, CheckCircle } from 'lucide-react';

export function BookingSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Book a request in 3 simple steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ClipboardList className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Provide your appliance details
            </h3>
            <p className="text-gray-600">
              Let us know your appliance details and your issue.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Choose your technician
            </h3>
            <p className="text-gray-600">
              Choose from a wide variety of technicians and vendors.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get it fixed!</h3>
            <p className="text-gray-600">
              The technician will arrive at your doorstep shortly to fix it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}