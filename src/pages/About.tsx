
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Headphones, Calendar, Phone } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Marcus Johnson',
      role: 'Founder & Lead Sound Engineer',
      image: 'photo-1649972904349-6e44c42644a7',
      bio: '15+ years in professional audio with experience from intimate venues to major festivals.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lighting Designer & Event Coordinator',
      image: 'photo-1526374965328-7f61d4dc18c5',
      bio: 'Creative lighting specialist who transforms spaces with innovative design and technical expertise.'
    },
    {
      name: 'DJ Rico',
      role: 'Senior DJ & Entertainment Director',
      image: 'photo-1605810230434-7631ac76ec81',
      bio: 'Master of reading the crowd with an extensive music library spanning all genres and decades.'
    }
  ];

  const testimonials = [
    {
      name: 'Emily & James Rodriguez',
      event: 'Wedding Reception',
      quote: 'True Bass made our wedding absolutely perfect! The sound quality was incredible and the lighting created such a romantic atmosphere. Marcus and his team were professional and went above and beyond.',
      rating: 5
    },
    {
      name: 'Corporate Events Inc.',
      event: 'Annual Gala',
      quote: 'We\'ve worked with True Bass for three consecutive years. Their attention to detail and professional service makes every event seamless. Highly recommended for corporate functions.',
      rating: 5
    },
    {
      name: 'Festival Director - Summer Sounds',
      event: 'Music Festival',
      quote: 'The technical expertise and equipment quality provided by True Bass Entertainment elevated our festival to the next level. The artists were impressed with the sound clarity.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Repeat Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            About True Bass
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about creating unforgettable experiences through superior sound, 
            stunning visuals, and professional entertainment services.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bass-card text-center p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To deliver exceptional sound, lighting, and entertainment services that exceed expectations 
              and create lasting memories. We believe that every event, whether intimate or grand, 
              deserves professional-grade equipment and expert technical support.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bass-card text-center p-6">
              <div className="text-3xl font-display font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise to every event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bass-card text-center">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bass-dark/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <Badge className="mb-4 bg-neon-blue text-bass-dark">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the clients who trust us with their most important events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bass-card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-neon-orange rounded-full mr-1" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold gradient-text mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Music,
                title: 'Quality First',
                description: 'Professional-grade equipment and meticulous attention to detail'
              },
              {
                icon: Headphones,
                title: 'Client Focus',
                description: 'Personalized service tailored to your unique event needs'
              },
              {
                icon: Calendar,
                title: 'Reliability',
                description: 'On-time delivery and dependable service you can count on'
              },
              {
                icon: Phone,
                title: 'Support',
                description: '24/7 availability for your peace of mind'
              }
            ].map((value, index) => (
              <Card key={index} className="bass-card text-center p-6">
                <value.icon className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
