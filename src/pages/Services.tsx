
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Music, Headphones, Calendar, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: 'Sound & Lighting Systems',
      description: 'Professional grade audio equipment and dynamic lighting solutions for venues of all sizes.',
      features: [
        'High-end PA systems',
        'Wireless microphone systems',
        'LED lighting packages',
        'Stage lighting design',
        'Technical crew included'
      ],
      image: '/services/sound_rental.png'
    },
    {
      icon: Headphones,
      title: 'DJ & Mobile Disc Services',
      description: 'Experienced DJs with extensive music libraries and crowd-reading expertise.',
      features: [
        'Professional DJ services',
        'Custom playlist creation',
        'MC/Announcer services',
        'Interactive entertainment',
        'Wedding packages available'
      ],
      image: '/services/dj_services.png'
    },
    {
      icon: Music,
      title: 'Musical Instrument Rentals',
      description: 'Quality instruments for performers, events, and recording sessions.',
      features: [
        'Guitars, bass, drums',
        'Keyboards & synthesizers',
        'Professional amplifiers',
        'Recording equipment',
        'Delivery & setup included'
      ],
      image: '/services/instruments_rental.png'
    },
    {
      icon: Calendar,
      title: 'Artist & Event Management',
      description: 'Complete event coordination and artist booking services.',
      features: [
        'Event planning & coordination',
        'Artist booking & management',
        'Venue selection assistance',
        'Technical production',
        'Marketing support'
      ],
      image: '/services/artist_management.png'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional sound, lighting, and entertainment services for events of all sizes. 
            From intimate gatherings to large-scale productions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="bass-card h-full">
                  <div className="p-8">
                    <service.icon className="w-12 h-12 text-neon-blue mb-4" />
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-neon-orange rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
                    >
                      <Link to="/booking">Get Quote</Link>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-xl w-full h-full min-h-[400px] lg:min-h-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bass-dark/50 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-bass-gray to-bass-light rounded-2xl">
          <h2 className="text-3xl font-display font-bold gradient-text mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and let's make your event unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
