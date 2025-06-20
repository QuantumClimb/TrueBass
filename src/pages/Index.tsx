import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Music, Headphones, Calendar, Phone } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Music,
      title: 'Sound & Lighting',
      description: 'Professional audio equipment and stunning light shows for any event'
    },
    {
      icon: Headphones,
      title: 'DJ Services',
      description: 'Expert DJs and mobile disc services to keep your party moving'
    },
    {
      icon: Music,
      title: 'Instrument Rentals',
      description: 'Quality musical instruments for performers and events'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Full-service event planning and artist management'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-[0px] left-0 right-0 bottom-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/share-image.png"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-bass-dark/70 via-bass-gray/60 to-bass-dark/70" />
        </div>
        
        {/* Animated background elements (over video) */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-blue/60 rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-4 flex justify-center">
            <img 
              src="/logo.png" 
              alt="True Bass Entertainment Logo" 
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light -mt-[50px]">
            Sound That Moves You
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              <Link to="/booking">Book Your Event</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark text-lg px-8 py-6"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From intimate gatherings to massive concerts, we provide comprehensive sound and event solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bass-card group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center p-6">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-neon-blue group-hover:text-neon-orange transition-colors" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-bass-gray to-bass-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Make Some <span className="gradient-text">Noise</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch today and let's create an unforgettable experience for your next event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90 transition-opacity"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark"
            >
              <a href="tel:+15551234BASS">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
