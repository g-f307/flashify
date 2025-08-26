import React, { useState, useEffect } from 'react';
import { Card } from './card';
import { Button } from './button';
import { RotateCcw, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashcardProps {
  front: string;
  back: string;
  className?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ front, back, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className={cn("relative w-full max-w-sm mx-auto", className)}>
      <div 
        className={cn(
          "flip-card cursor-pointer h-64",
          isFlipped && "flipped"
        )}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          {/* Front of card */}
          <Card className="flip-card-front p-6 bg-gradient-card shadow-card hover:shadow-primary transition-all duration-300 hover-lift border-2 border-primary/10">
            <div className="h-full flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-base font-medium leading-relaxed text-foreground">
                  {front}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Eye className="w-3 h-3 mr-1" />
                  Pergunta
                </div>
                
                <div className="p-1 rounded-full bg-primary/10">
                  <RotateCcw className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Back of card */}
          <Card className="flip-card-back p-6 bg-gradient-accent shadow-accent hover:shadow-primary transition-all duration-300 hover-lift border-2 border-accent/20">
            <div className="h-full flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-base font-medium leading-relaxed text-accent-foreground">
                  {back}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-accent-foreground/70">
                  <EyeOff className="w-3 h-3 mr-1" />
                  Resposta
                </div>
                
                <div className="p-1 rounded-full bg-accent-foreground/10">
                  <RotateCcw className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};