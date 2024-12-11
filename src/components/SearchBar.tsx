import { Search } from 'lucide-react';
import { useState } from 'react';
import { LocationDropdown } from './LocationDropdown';

interface SearchBarProps {
  onSearch: (query: string, city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('Pune');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query, city);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full max-w-2xl">
      <div className="flex-1 relative">
        <LocationDropdown value={city} onChange={setCity} />
      </div>
      <div className="flex-[2] flex">
        <input
          type="text"
          placeholder="Search Home Appliances"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-l-md focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 flex items-center"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}