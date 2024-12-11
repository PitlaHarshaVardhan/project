import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { locations } from '../data/locations';

interface LocationDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationDropdown({ value, onChange }: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLocation = locations.find((loc) => loc.city === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-indigo-500"
      >
        <span>{value}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {locations.map((location) => (
            <button
              key={location.city}
              type="button"
              onClick={() => {
                onChange(location.city);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            >
              {location.city}
            </button>
          ))}
        </div>
      )}

      {selectedLocation && (
        <span className="absolute right-3 top-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
          Only in {selectedLocation.areas.join(', ')}
        </span>
      )}
    </div>
  );
}