
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
                To my dearest wife on your 20th birthday,
              </p>
              <p>
                As you celebrate this milestone birthday, I wanted to create something special that captures just how much you mean to me. Twenty years of your beautiful existence on this earth - what a gift that has been to everyone who knows you, especially me.
              </p>
              <p>
                Your kindness, your strength, your laughter, and even your little quirks that only I get to see - every part of you has made my life infinitely better. The way you love, the way you care, and the way you make our house a home fills me with gratitude every single day.
              </p>
              <p>
                Today is all about celebrating YOU - the incredible person you are and all the amazing things you've yet to do. The world is lucky to have you, and I'm the luckiest of all to call you mine.
              </p>
              <p>
                Happy 20th birthday, my love. Here's to many more birthdays together, many more adventures, many more quiet moments, and many more reasons to celebrate this beautiful life we're building together.
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
