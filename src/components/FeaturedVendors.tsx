import { Star } from 'lucide-react';
import type { Technician } from '../types';

interface FeaturedVendorsProps {
  vendors: Technician[];
}

export function FeaturedVendors({ vendors }: FeaturedVendorsProps) {
  if (vendors.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Vendors</h2>
          <div className="text-center text-gray-500">
            No vendors found matching your search criteria.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Vendors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{vendor.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1">{vendor.rating}/10</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-semibold">{vendor.services}</div>
                  <div className="text-sm text-gray-500">Services</div>
                </div>
                <div>
                  <div className="font-semibold">{vendor.rating}/10</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
                <div>
                  <div className="font-semibold">{vendor.reviews}</div>
                  <div className="text-sm text-gray-500">Reviews</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600">Specialties:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {vendor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800">
                Show more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}