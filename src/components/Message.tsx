
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { heart } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section id="message" className="py-20 bg-birthday-lavender bg-opacity-30">
      <div className="birthday-container">
        <h2 className="section-title">A Message For You</h2>
        
        <Card className="max-w-3xl mx-auto golden-border bg-white bg-opacity-90 shadow-lg">
          <CardContent className="p-8">
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                To the love of my life,
              </p>
              <p>
                Happy Birthday, my sweetheart. <br> Today should’ve started with smiles, warmth, and love — and I’m so deeply sorry that I forgot your special day. I know how much your birthday means, 
                and I can’t express how badly I wish I could go back in time and make it right. Please know this from my heart: this will never happen again.
              </p>
              <p>
                You deserve the kind of love that never misses a moment to make you feel special, and I failed you this time. But even in my mistakes, one thing is true — you mean everything to me.
              </p>
              <p>
                You are the light in my life, the calm in my chaos, and the only girl I ever want to walk this life with. Your smile makes my world brighter, your voice is my favorite sound, 
                and your love is the most precious gift I’ve ever received.
              </p>
              <p>
                I know you deserve the best — the kind of love that sweeps you off your feet. And maybe I’m not the best, not yet… But I promise you, every single day I’m working hard to 
                become better, to give you all the happiness in the world. Because that’s what you deserve, my girl. You deserve joy, peace, passion, and a love that never stops trying.
              </p>
              <p>
                So please… keep the hope in me. Keep loving me, the way only you can. And I promise to love you harder, deeper, and more beautifully with every passing day.
              </p>
              <p>
                Today, I celebrate you — the beautiful soul who stole my heart and gave me a reason to believe in magic again. I’m so lucky to call you mine, and I’ll spend the rest of my life proving that to you.
              </p>
              <p className="text-right font-dancing text-2xl text-birthday-rose">
                With all my love,
              </p>
              <p className="text-right font-dancing text-2xl">
                Your husband
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Message;
