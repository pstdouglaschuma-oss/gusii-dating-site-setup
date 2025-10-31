
import { Link } from 'react-router-dom';
import { Heart, Users, MessageCircle, Shield, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Gusii Connect
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-primary/30">
              <MapPin className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground font-medium">Connecting Gusii Hearts Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground text-balance">
              Find Your Perfect Match in the Gusii Community
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance">
              Connect with compatible singles who share your culture, values, and dreams. Start your journey to lasting love today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-xl text-lg px-8 py-6">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join Free Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm">Active Members</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30" />
              <div className="text-center">
                <div className="text-3xl font-bold">2.5K+</div>
                <div className="text-sm">Success Stories</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30" />
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Match Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Gusii Connect?
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring together the best features to help you find meaningful connections
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Smart Matching',
                description: 'Our advanced algorithm connects you with compatible partners based on shared values and interests.',
                gradient: 'from-primary to-secondary',
              },
              {
                icon: MessageCircle,
                title: 'Instant Messaging',
                description: 'Chat in real-time with your matches and build meaningful connections through conversation.',
                gradient: 'from-secondary to-accent',
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Your privacy and safety are our top priorities. All profiles are verified and protected.',
                gradient: 'from-accent to-primary',
              },
              {
                icon: Heart,
                title: 'Cultural Connection',
                description: 'Connect with singles who understand and appreciate Gusii culture and traditions.',
                gradient: 'from-primary to-accent',
              },
              {
                icon: Sparkles,
                title: 'Premium Features',
                description: 'Unlock advanced search filters, unlimited likes, and see who viewed your profile.',
                gradient: 'from-secondary to-primary',
              },
              {
                icon: MapPin,
                title: 'Global Reach',
                description: 'Find Gusii singles near you or connect with the diaspora community worldwide.',
                gradient: 'from-accent to-secondary',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Find Your Soulmate?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of Gusii singles who have found love through our platform. Your perfect match is waiting!
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg px-12 py-6 animate-pulse-glow">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Start Your Love Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary fill-primary" />
                <span className="text-xl font-bold text-card-foreground">Gusii Connect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Bringing Gusii hearts together, one match at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Gusii Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}