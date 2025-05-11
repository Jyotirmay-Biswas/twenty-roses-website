
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Make sure to set this to the correct birthday date
const BIRTHDAY_DATE = new Date('2026-05-11T00:00:00'); // Example date, update to your wife's actual birthday

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loading, setLoading] = useState(true);
  const [isPast, setIsPast] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = BIRTHDAY_DATE.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsPast(true);
        setLoading(false);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      setLoading(false);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg golden-border shadow-md">
        <span className="text-2xl md:text-4xl font-bold text-birthday-rose">{value}</span>
      </div>
      <span className="mt-2 text-sm md:text-base text-gray-600">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-20">
      <div className="birthday-container">
        <h2 className="section-title">Birthday Countdown</h2>
        <Card className="max-w-3xl mx-auto golden-border bg-white bg-opacity-90 shadow-lg">
          <CardContent className="p-8">
            {loading ? (
              <div className="flex justify-center py-12">
                <p>Loading countdown...</p>
              </div>
            ) : isPast ? (
              <div className="text-center py-12">
                <h3 className="text-3xl font-dancing font-bold text-birthday-rose mb-4">
                  Happy Birthday!
                </h3>
                <p className="text-lg text-gray-700">
                  Today is your special day! I hope it's filled with love, joy, and everything wonderful!
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg mb-8">
                  Counting down to your next birthday celebration:
                </p>
                <div className="flex justify-center space-x-4 md:space-x-8">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <CountdownBox value={timeLeft.minutes} label="Minutes" />
                  <CountdownBox value={timeLeft.seconds} label="Seconds" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Countdown;
