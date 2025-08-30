
import React from 'react';
import { Link } from 'react-router-dom';
import { EqualizerIcon } from '@/components/ui/equalizer-icon';
import { Phone, Image, Music, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bass-gray border-t border-bass-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <EqualizerIcon className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl gradient-text">True Bass</span>
                <span className="text-sm text-muted-foreground -mt-1">Entertainment</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional sound & lighting systems, DJ services, instrument rentals, and event management. 
              Sound That Moves You.
            </p>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5 text-neon-blue" />
              <Image className="w-5 h-5 text-neon-orange" />
              <Music className="w-5 h-5 text-neon-blue" />
              <Video className="w-5 h-5 text-neon-orange" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/services" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Gallery
              </Link>
              <Link to="/booking" className="block text-muted-foreground hover:text-neon-blue transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>Phone: +1 (555) 123-BASS</p>
              <p>Email: info@truebass.com</p>
              <p>Available 24/7 for events</p>
            </div>
          </div>
        </div>

        <div className="border-t border-bass-light mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 True Bass Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
