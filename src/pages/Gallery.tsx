
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, Video, Music, Calendar } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'concert',
      title: 'Live Setup at NSCBICC, KL',
      image: 'photo-1470813740244-df37b8c1edcb',
      description: 'Lights flashing, crowd enjoying our professional sound setup at National Science Centre'
    },
    {
      id: 2,
      type: 'image',
      category: 'party',
      title: 'True Bass DJ Night – Kuala Lumpur',
      image: 'photo-1605810230434-7631ac76ec81',
      description: 'Energetic dance floor with our signature DJ services and lighting'
    },
    {
      id: 3,
      type: 'image',
      category: 'corporate',
      title: 'Private Event – Poolside Setup',
      image: 'photo-1526374965328-7f61d4dc18c5',
      description: 'Elegant lighting & PA system for exclusive poolside corporate event'
    },
    {
      id: 4,
      type: 'image',
      category: 'concert',
      title: 'Cultural Fest 2024 – Full stage sound gear',
      image: 'photo-1649972904349-6e44c42644a7',
      description: 'Complete stage sound system setup for major cultural festival'
    },
    {
      id: 5,
      type: 'video',
      category: 'wedding',
      title: 'Behind the Scenes – Soundcheck moments',
      image: 'photo-1500673922987-e212871fec22',
      description: 'Professional soundcheck preparation for wedding reception'
    },
    {
      id: 6,
      type: 'image',
      category: 'wedding',
      title: 'Elegant Wedding Reception',
      image: 'photo-1649972904349-6e44c42644a7',
      description: 'Beautiful outdoor wedding with romantic lighting setup'
    }
  ];

  const categories = [
    { key: 'all', label: 'All', icon: ImageIcon },
    { key: 'wedding', label: 'Weddings', icon: Music },
    { key: 'concert', label: 'Concerts', icon: Video },
    { key: 'corporate', label: 'Corporate', icon: Calendar },
    { key: 'party', label: 'Parties', icon: Music }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our recent work and see how we bring events to life with 
            professional sound, lighting, and entertainment services across Malaysia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={filter === category.key ? "default" : "outline"}
              onClick={() => setFilter(category.key)}
              className={
                filter === category.key
                  ? "bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
                  : "border-bass-light text-muted-foreground hover:border-neon-blue hover:text-neon-blue"
              }
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bass-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bass-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Type Badge */}
                <Badge 
                  className="absolute top-4 right-4 bg-neon-blue text-bass-dark"
                >
                  {item.type === 'video' ? (
                    <><Video className="w-3 h-3 mr-1" /> Video</>
                  ) : (
                    <><ImageIcon className="w-3 h-3 mr-1" /> Photo</>
                  )}
                </Badge>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    {item.type === 'video' ? 'Play Video' : 'View Full Size'}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-20">
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark"
          >
            Load More Images
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-bass-gray to-bass-light rounded-2xl">
          <h2 className="text-3xl font-display font-bold gradient-text mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create stunning visuals and unforgettable experiences for your next event in Kuala Lumpur and beyond.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90"
          >
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
