
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return <section id="home" className="min-h-[95vh] flex items-center pt-16">
      <div className="birthday-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-dancing font-bold mb-4 text-birthday-rose">
              Happy 20th<br />Birthday <span className="text-birthday-gold">Love!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Today is all about celebrating the amazing person you are and the joy you bring into my life every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('gallery')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-birthday-rose hover:bg-birthday-rose/80 text-lg">
                See Memories
              </Button>
              <Button onClick={() => document.getElementById('message')?.scrollIntoView({
              behavior: 'smooth'
            })} variant="outline" className="border-birthday-rose text-birthday-rose hover:bg-birthday-rose/10 text-lg">
                Read Message
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-birthday-lavender rounded-full opacity-50 animate-pulse-gentle"></div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-birthday-pink rounded-full opacity-60 animate-float"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden golden-border p-2 bg-white rotate-3 animate-float">
              <img alt="Our First Date" src="/lovable-uploads/d58ee868-7cc5-448a-bc3b-b7d06fa10dc9.png" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
