import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                StudyLens
              </h1>
              <p className="text-xs text-muted-foreground">
                Flashcards com IA
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Como funciona
            </Button>
            <Button variant="hero" size="sm" className="shadow-primary">
              <Sparkles className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};