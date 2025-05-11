
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { heart } from 'lucide-react';

const BirthdayCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section id="card" className="py-20 bg-birthday-pink bg-opacity-30">
      <div className="birthday-container">
        <h2 className="section-title">Your Birthday Card</h2>
        
        <div className="max-w-md mx-auto">
          <div 
            className={`relative w-full aspect-[3/4] perspective-1000 transition-all duration-1000 transform-style-3d cursor-pointer ${
              isOpen ? 'rotate-y-180' : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Card Front */}
            <div 
              className={`absolute w-full h-full backface-hidden rounded-2xl golden-border bg-white p-6 flex flex-col items-center justify-center shadow-xl ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="text-center">
                <div className="text-birthday-rose text-3xl font-dancing font-bold mb-4">
                  Click to Open Your Card
                </div>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-birthday-rose flex items-center justify-center animate-pulse-gentle">
                  <span className="text-5xl text-white">20</span>
                </div>
                <div className="font-dancing text-xl font-semibold">
                  Happy Birthday!
                </div>
                <p className="mt-2 text-gray-500">
                  (Tap card to open)
                </p>
              </div>
            </div>
            
            {/* Card Inside */}
            <div 
              className={`absolute w-full h-full backface-hidden rounded-2xl golden-border bg-white p-6 rotate-y-180 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center h-full flex flex-col justify-between">
                <div className="text-birthday-rose text-3xl font-dancing font-bold mb-4">
                  On Your Special Day
                </div>
                <div className="py-4">
                  <p className="mb-4">
                    Happy Birthday, my love.
                  </p>
                  <p className="mb-4">
                    I know I forgot your birthday, and I can’t express how sorry I am for that. If I could take it back, I would in a heartbeat. You didn’t deserve to be let down like that — you deserve the best in this world.
                    And I know I’m not the best… but every single day, I’m trying to become better, to give you the happiness and love you truly deserve. Please don’t lose hope in me. Keep loving me, like you always do — your love is my biggest strength.
                  </p>
                   <p>
                    May this year be filled with adventure, growth, laughter, and success. You deserve all the happiness in the world, today and always. And I’m so grateful to celebrate another year of your beautiful life, even if I stumbled along the way.
                  </p>
                </div>
                <div className="font-dancing text-2xl font-semibold text-birthday-rose">
                  I love you! more than words can say.
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="border-birthday-rose text-birthday-rose hover:bg-birthday-rose/10"
            >
              {isOpen ? 'Close Card' : 'Open Card'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCard;
