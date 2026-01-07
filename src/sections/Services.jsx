import { services } from '../constants';
import { ServiceCard } from '../components';

const Services = () => {
  return (
    <section id="services"
      className='flex flex-wrap justify-center max-container gap-9'
    >
      {console.log(services)}
      {services.map(service => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services