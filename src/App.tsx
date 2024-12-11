import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { BookingSteps } from "./components/BookingSteps";
import { FeaturedVendors } from "./components/FeaturedVendors";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { LoginPage } from "./pages/Login";
import { BusinessLoginPage } from "./pages/BusinessLogin";
import { AuthProvider } from "./contexts/AuthContext";
import { Tablet } from "lucide-react";
import { vendors } from "./data/vendors";
import { useState } from "react";

const mockReviews = [
  {
    id: 1,
    author: "Peter Breis",
    rating: 4,
    date: "3 days ago",
    comment:
      "Knowledgeable and easy to work with. They make Instagram easy for those of us who aren't that savvy. Growth has been great and the followers have been quality. Couldn't be happier.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export function HomePage() {
  const [filteredVendors, setFilteredVendors] = useState(vendors);

  const handleSearch = (query: string, city: string) => {
    if (!query.trim()) {
      setFilteredVendors(vendors);
      return;
    }

    const searchTerms = query.toLowerCase().split(" ");
    const filtered = vendors.filter((vendor) => {
      const matchesSearch = searchTerms.some(
        (term) =>
          vendor.name.toLowerCase().includes(term) ||
          vendor.specialties.some((specialty) =>
            specialty.toLowerCase().includes(term)
          )
      );

      // Filter by city if selected
      const matchesCity = city === "All" || vendor.city === city;

      return matchesSearch && matchesCity;
    });

    setFilteredVendors(filtered);
  };

  return (
    <>
      <main>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  Take care of your home needs now!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  ServicePro is your one-stop solution to troubleshoot, choose a
                  vendor and book a technician.
                </p>
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="../../public/Frame.png"
                    className="w-100 h-100 text-red-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <BookingSteps />
        <FeaturedVendors vendors={filteredVendors} />
        <Reviews reviews={mockReviews} />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/business-login" element={<BusinessLoginPage />} />
          </Routes>

          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <p className="text-gray-400">
                    Your trusted platform for home appliance repairs and
                    maintenance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: support@argon.com</li>
                    <li>Phone: (555) 123-4567</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}
