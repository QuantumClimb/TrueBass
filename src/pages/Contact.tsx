
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Image, Music, Video, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-BASS',
      action: 'tel:+15551234BASS'
    },
    {
      icon: Image,
      title: 'WhatsApp',
      details: '+1 (555) 123-BASS',
      action: 'https://wa.me/15551234BASS'
    },
    {
      icon: Music,
      title: 'Email',
      details: 'info@truebass.com',
      action: 'mailto:info@truebass.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Serving Greater Metro Area',
      action: null
    }
  ];

  const socialLinks = [
    { icon: Image, name: 'Instagram', url: '#' },
    { icon: Music, name: 'Facebook', url: '#' },
    { icon: Video, name: 'YouTube', url: '#' },
    { icon: Phone, name: 'TikTok', url: '#' }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make your event unforgettable? Contact us today for a personalized quote 
            and consultation. We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bass-card p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Event Consultation Form
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-bass-gray border-bass-light" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-bass-gray border-bass-light" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-bass-gray border-bass-light" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-bass-gray border-bass-light" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
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
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input id="eventDate" type="date" className="bg-bass-gray border-bass-light" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guestCount">Expected Guests</Label>
                    <Input id="guestCount" type="number" placeholder="50" className="bg-bass-gray border-bass-light" />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select className="w-full p-3 bg-bass-gray border border-bass-light rounded-md text-foreground">
                      <option value="">Select budget range</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="venue">Venue/Location</Label>
                  <Input id="venue" placeholder="Event venue or address" className="bg-bass-gray border-bass-light" />
                </div>

                <div>
                  <Label htmlFor="services">Services Needed</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Sound System', 'Lighting', 'DJ Services', 'Instruments', 'Event Planning', 'MC Services'].map((service) => (
                      <label key={service} className="flex items-center space-x-2 text-muted-foreground">
                        <input type="checkbox" className="rounded border-bass-light" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your event, special requirements, or questions..."
                    className="bg-bass-gray border-bass-light min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-orange hover:opacity-90 text-lg py-6">
                  Send Consultation Request
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="bass-card p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{contact.title}</div>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-muted-foreground hover:text-neon-blue transition-colors"
                        >
                          {contact.details}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{contact.details}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="bass-card p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 PM - 4:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-neon-blue/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-neon-blue" />
                    <span className="text-sm text-foreground font-medium">
                      24/7 Emergency Support Available
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bass-card p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 bg-bass-gray rounded-lg hover:bg-bass-light transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-neon-blue group-hover:text-neon-orange transition-colors" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button 
                asChild 
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
              >
                <a href="https://wa.me/15551234BASS">
                  <Image className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-bass-dark text-lg py-6"
              >
                <a href="tel:+15551234BASS">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
