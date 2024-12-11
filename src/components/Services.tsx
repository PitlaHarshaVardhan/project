import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">All Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional repair and maintenance services for all your home appliances
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}