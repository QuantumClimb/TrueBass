
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Music } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Summer Music Festival',
      date: '2024-07-15',
      time: '6:00 PM - 11:00 PM',
      venue: 'Central Park Amphitheater',
      type: 'Festival',
      image: 'photo-1470813740244-df37b8c1edcb',
      description: 'Annual summer festival featuring local and regional artists with full sound and lighting production.'
    },
    {
      id: 2,
      title: 'Corporate Gala Night',
      date: '2024-07-22',
      time: '7:00 PM - 12:00 AM',
      venue: 'Grand Hotel Ballroom',
      type: 'Corporate',
      image: 'photo-1526374965328-7f61d4dc18c5',
      description: 'Elegant corporate event with live DJ, sophisticated lighting, and professional sound system.'
    },
    {
      id: 3,
      title: 'Wedding Reception',
      date: '2024-07-28',
      time: '5:00 PM - 1:00 AM',
      venue: 'Sunset Gardens',
      type: 'Wedding',
      image: 'photo-1649972904349-6e44c42644a7',
      description: 'Beautiful outdoor wedding reception with romantic lighting and dance floor setup.'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Spring Concert Series',
      date: '2024-05-20',
      venue: 'Downtown Arena',
      type: 'Concert',
      image: 'photo-1605810230434-7631ac76ec81',
      description: 'Multi-artist concert series with complex stage production and lighting design.'
    },
    {
      id: 5,
      title: 'Charity Fundraiser',
      date: '2024-04-15',
      venue: 'Community Center',
      type: 'Charity',
      image: 'photo-1500673922987-e212871fec22',
      description: 'Community fundraising event with live entertainment and auction night.'
    }
  ];

  const EventCard = ({ event, isPast = false }) => (
    <Card className="bass-card group hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={`https://images.unsplash.com/${event.image}?auto=format&fit=crop&w=600&q=80`}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bass-dark/80 to-transparent" />
        <Badge 
          className="absolute top-4 right-4 bg-neon-blue text-bass-dark"
        >
          {event.type}
        </Badge>
        {isPast && (
          <div className="absolute top-4 left-4 bg-bass-gray/80 backdrop-blur-sm text-muted-foreground px-2 py-1 rounded text-sm">
            Past Event
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
            {event.time && <span className="ml-2">• {event.time}</span>}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-neon-orange" />
            <span>{event.venue}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">
          {event.description}
        </p>
        
        {!isPast && (
          <Button 
            className="w-full bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
          >
            Learn More
          </Button>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Events & Shows
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate private parties to large-scale festivals, discover our upcoming events 
            and see what we've been creating with our clients.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Music className="w-6 h-6 text-neon-blue mr-3" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Calendar className="w-6 h-6 text-neon-orange mr-3" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              Recent Events
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-bass-gray to-bass-light rounded-2xl">
          <h2 className="text-3xl font-display font-bold gradient-text mb-4">
            Want Your Event Featured Here?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable event that your guests will be talking about for years to come.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
          >
            <a href="/booking">Plan Your Event</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
