
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, DollarSign, Music, Headphones, Image, Video } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [bookingStep, setBookingStep] = useState(1);

  const services = [
    {
      id: 'sound-lighting',
      name: 'Sound & Lighting Systems',
      icon: Music,
      basePrice: 'RM2,200',
      description: 'Professional PA systems and lighting packages',
      features: ['High-end PA system', 'Wireless microphones', 'LED lighting', 'Technical crew']
    },
    {
      id: 'dj-services',
      name: 'DJ & Mobile Disc Services',
      icon: Headphones,
      basePrice: 'RM1,300',
      description: 'Professional DJ services with extensive music library',
      features: ['Professional DJ', 'Music library', 'MC services', 'Dance floor lighting']
    },
    {
      id: 'instruments',
      name: 'Musical Instrument Rentals',
      icon: Music,
      basePrice: 'RM450',
      description: 'Quality instruments for performers and events',
      features: ['Guitars, bass, drums', 'Keyboards & synths', 'Amplifiers', 'Delivery included']
    },
    {
      id: 'event-management',
      name: 'Artist & Event Management',
      icon: Calendar,
      basePrice: 'RM4,500',
      description: 'Complete event coordination and artist booking',
      features: ['Event planning', 'Artist booking', 'Venue coordination', 'Marketing support']
    }
  ];

  const timeSlots = [
    '9:00 AM - 1:00 PM',
    '2:00 PM - 6:00 PM',
    '6:00 PM - 10:00 PM',
    '10:00 PM - 2:00 AM',
    'All Day (8 hours)',
    'Custom Duration'
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setBookingStep(2);
  };

  const handleWhatsAppBooking = () => {
    const selectedServiceData = services.find(s => s.id === selectedService);
    const message = `Hi! I'd like to book ${selectedServiceData?.name} for my event. Can we discuss details?`;
    const whatsappUrl = `https://wa.me/15551234BASS?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Book Your Event
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select your service, choose your date and time, and we'll handle the rest. 
            Your perfect event is just a few clicks away.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              bookingStep >= 1 ? 'bg-neon-blue text-bass-dark' : 'bg-bass-gray text-muted-foreground'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${bookingStep >= 2 ? 'bg-neon-blue' : 'bg-bass-gray'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              bookingStep >= 2 ? 'bg-neon-blue text-bass-dark' : 'bg-bass-gray text-muted-foreground'
            }`}>
              2
            </div>
            <div className={`w-16 h-1 ${bookingStep >= 3 ? 'bg-neon-blue' : 'bg-bass-gray'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              bookingStep >= 3 ? 'bg-neon-blue text-bass-dark' : 'bg-bass-gray text-muted-foreground'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {bookingStep === 1 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Choose Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className="bass-card cursor-pointer hover:transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-neon-blue mr-3" />
                      <div>
                        <h3 className="text-lg font-display font-semibold text-foreground">
                          {service.name}
                        </h3>
                        <Badge className="bg-neon-orange text-bass-dark">
                          Starting at {service.basePrice}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90 group-hover:neon-glow transition-all">
                      Select This Service
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Event Details */}
        {bookingStep === 2 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground">
                Event Details
              </h2>
              <Button 
                variant="outline"
                onClick={() => setBookingStep(1)}
                className="border-bass-light text-muted-foreground hover:border-neon-blue hover:text-neon-blue"
              >
                ← Back to Services
              </Button>
            </div>

            <Card className="bass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-2 block">Event Date</Label>
                    <Input type="date" className="bg-bass-gray border-bass-light" />
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Time Slot</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {timeSlots.map((slot, index) => (
                        <label key={index} className="flex items-center space-x-2 p-3 bg-bass-gray rounded-lg hover:bg-bass-light transition-colors cursor-pointer">
                          <input type="radio" name="timeSlot" className="text-neon-blue" />
                          <span className="text-muted-foreground">{slot}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground mb-2 block">Event Location</Label>
                    <Input placeholder="Venue name or address" className="bg-bass-gray border-bass-light mb-2" />
                    <Input placeholder="City, State" className="bg-bass-gray border-bass-light" />
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Expected Guests</Label>
                    <Input type="number" placeholder="Number of attendees" className="bg-bass-gray border-bass-light" />
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Event Type</Label>
                    <select className="w-full p-3 bg-bass-gray border border-bass-light rounded-md text-foreground">
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="festival">Festival/Concert</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-foreground mb-2 block">Special Requirements</Label>
                    <textarea 
                      placeholder="Any special requests or requirements..."
                      className="w-full p-3 bg-bass-gray border border-bass-light rounded-md text-foreground min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={() => setBookingStep(3)}
                  className="flex-1 bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90 text-sm md:text-lg py-4 md:py-6 px-4 md:px-6"
                >
                  Continue to Confirmation
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Step 3: Confirmation & Contact */}
        {bookingStep === 3 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground">
                Confirm Your Booking
              </h2>
              <Button 
                variant="outline"
                onClick={() => setBookingStep(2)}
                className="border-bass-light text-muted-foreground hover:border-neon-blue hover:text-neon-blue"
              >
                ← Edit Details
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Summary */}
              <Card className="bass-card p-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Booking Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-neon-blue" />
                    <div>
                      <div className="font-semibold text-foreground">Service</div>
                      <div className="text-muted-foreground">
                        {services.find(s => s.id === selectedService)?.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-neon-orange" />
                    <div>
                      <div className="font-semibold text-foreground">Date & Time</div>
                      <div className="text-muted-foreground">Selected date and time slot</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                    <div>
                      <div className="font-semibold text-foreground">Location</div>
                      <div className="text-muted-foreground">Your event venue</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-neon-orange" />
                    <div>
                      <div className="font-semibold text-foreground">Estimated Price</div>
                      <div className="text-muted-foreground">
                        {services.find(s => s.id === selectedService)?.basePrice} (base rate)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-bass-gray rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    * Final pricing will be provided after consultation based on your specific requirements.
                  </p>
                </div>
              </Card>

              {/* Contact Options */}
              <Card className="bass-card p-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Complete Your Booking
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Choose how you'd like to finalize your booking. We'll confirm all details 
                  and provide you with a detailed quote.
                </p>

                <div className="space-y-4">
                  <Button 
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-green-600 hover:bg-green-700 text-sm md:text-lg py-4 md:py-6 px-4 md:px-6 min-h-[3rem]"
                  >
                    <Image className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                    <span className="leading-tight">Continue via WhatsApp</span>
                  </Button>

                  <Button 
                    variant="outline"
                    className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark text-sm md:text-lg py-4 md:py-6 px-4 md:px-6 min-h-[3rem]"
                  >
                    <Video className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                    <span className="leading-tight">Schedule Phone Call</span>
                  </Button>

                  <Button 
                    variant="outline"
                    className="w-full border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-bass-dark text-sm md:text-lg py-4 md:py-6 px-4 md:px-6 min-h-[3rem]"
                  >
                    <span className="leading-tight">Send Email Request</span>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-neon-blue/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Next Steps:</strong> We'll contact you within 2 hours to confirm 
                    details, discuss your requirements, and provide a final quote.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
