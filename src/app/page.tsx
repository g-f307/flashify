"use client";
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { FileUpload } from '@/components/ui/file-upload';
import { Flashcard } from '@/components/ui/flashcard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { Brain, Sparkles, Zap, BookOpen, FileText, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// Mock flashcards data
const mockFlashcards = [
  {
    front: "O que é Machine Learning?",
    back: "É um subcampo da inteligência artificial que permite que computadores aprendam e melhorem automaticamente através da experiência."
  },
  {
    front: "Qual a diferença entre supervised e unsupervised learning?",
    back: "Supervised learning usa dados rotulados para treinar modelos, enquanto unsupervised learning descobre padrões em dados não rotulados."
  },
  {
    front: "O que é um algoritmo de regressão?",
    back: "É um tipo de algoritmo de machine learning usado para prever valores contínuos com base em variáveis de entrada."
  }
];

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [flashcards, setFlashcards] = useState<typeof mockFlashcards>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const generateFlashcards = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setFlashcards(mockFlashcards);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(/hero-bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        <div className="relative container mx-auto px-4 py-20">
          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="max-w-4xl mx-auto text-center text-white">
              <ScrollAnimationWrapper animation="bounce-in" delay={200}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-medium">Powered by AI</span>
                </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={400}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Transforme PDFs em
                  <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-glow">
                    Flashcards Inteligentes
                  </span>
                </h1>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={600}>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  StudyLens usa IA avançada para extrair automaticamente conceitos-chave dos seus PDFs 
                  e criar flashcards personalizados em segundos. Revolucione seus estudos hoje!
                </p>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-4">
                    <FileText className="w-5 h-5 mr-2" />
                    Começar Grátis
                  </Button>
                  <Button variant="accent" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Ver Demonstração
                  </Button>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-in" delay={1000}>
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">10K+</div>
                    <div className="text-sm text-white/70">Estudantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">95%</div>
                    <div className="text-sm text-white/70">Precisão IA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">2s</div>
                    <div className="text-sm text-white/70">Tempo médio</div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper animation="fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 gradient-text">
                  Como funciona o StudyLens?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Três passos simples para revolucionar seus estudos
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ScrollAnimationWrapper animation="fade-in-up" delay={200}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center hover-lift shadow-primary group-hover:animate-bounce-in">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">1. Upload Inteligente</h3>
                  <p className="text-muted-foreground">
                    Arraste qualquer PDF educacional e nossa IA fará o resto
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={400}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center hover-lift shadow-accent group-hover:animate-bounce-in">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">2. IA Avançada</h3>
                  <p className="text-muted-foreground">
                    Algoritmos de ponta extraem conceitos principais automaticamente
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={600}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-warm flex items-center justify-center hover-lift shadow-primary group-hover:animate-bounce-in">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">3. Estude & Domine</h3>
                  <p className="text-muted-foreground">
                    Flashcards otimizados para máxima retenção de conhecimento
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>

            <ScrollAnimationWrapper animation="scale-in" delay={800}>
              <Card className="p-8 bg-gradient-card shadow-primary hover:shadow-glow transition-all duration-500 border-2 border-primary/20 hover-lift">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold text-center mb-6 gradient-text">
                    Experimente a revolução agora!
                  </h3>
                  
                  <FileUpload 
                    onFileSelect={handleFileSelect}
                    className="mb-6"
                  />
                  
                  {selectedFile && (
                    <div className="text-center">
                      <Button 
                        onClick={generateFlashcards}
                        disabled={isGenerating}
                        variant="hero"
                        size="lg"
                        className="shadow-primary text-lg px-8 py-4"
                      >
                        {isGenerating ? (
                          <>
                            <Zap className="w-5 h-5 mr-2 animate-pulse" />
                            Gerando Mágica...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 mr-2" />
                            Gerar Flashcards com IA
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Flashcards Preview */}
      {flashcards.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimationWrapper animation="fade-in-up">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 gradient-text">
                    Seus Flashcards Gerados ✨
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Clique nos cards para descobrir a mágica do flip 3D
                  </p>
                </div>
              </ScrollAnimationWrapper>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {flashcards.map((card, index) => (
                  <ScrollAnimationWrapper 
                    key={index} 
                    animation="scale-in" 
                    delay={index * 200}
                  >
                    <Flashcard
                      front={card.front}
                      back={card.back}
                    />
                  </ScrollAnimationWrapper>
                ))}
              </div>
              
              <ScrollAnimationWrapper animation="bounce-in" delay={600}>
                <div className="text-center">
                  <Button variant="hero" size="lg" className="shadow-primary text-lg px-8 py-4">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Começar Sessão de Estudo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 gradient-text">
                  Por que 10K+ estudantes escolhem StudyLens?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Descubra os recursos que estão revolucionando a forma como as pessoas estudam
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimationWrapper animation="fade-in-up" delay={200}>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-primary transition-all duration-500 hover-lift border-2 border-primary/10 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:animate-bounce-in shadow-primary">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Ultra Rápido</h3>
                  <p className="text-muted-foreground text-center">
                    Gere centenas de flashcards em segundos, não em horas
                  </p>
                </Card>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={400}>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-accent transition-all duration-500 hover-lift border-2 border-accent/10 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:animate-bounce-in shadow-accent">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">IA de Ponta</h3>
                  <p className="text-muted-foreground text-center">
                    Algoritmos GPT-4 identificam conceitos mais relevantes
                  </p>
                </Card>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={600}>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-primary transition-all duration-500 hover-lift border-2 border-success/10 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-success flex items-center justify-center group-hover:animate-bounce-in shadow-accent">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">95% Mais Eficaz</h3>
                  <p className="text-muted-foreground text-center">
                    Baseado em técnicas comprovadas de memorização ativa
                  </p>
                </Card>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animation="fade-in-up" delay={800}>
                <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 hover-lift border-2 border-warning/10 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-warm flex items-center justify-center group-hover:animate-bounce-in shadow-primary">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Comunidade Ativa</h3>
                  <p className="text-muted-foreground text-center">
                    Junte-se a milhares de estudantes que já transformaram seus estudos
                  </p>
                </Card>
              </ScrollAnimationWrapper>
            </div>

            {/* Call to Action */}
            <ScrollAnimationWrapper animation="scale-in" delay={1000}>
              <div className="mt-16 text-center">
                <Card className="p-8 bg-gradient-primary text-white shadow-glow border-0 max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-yellow-300 mr-2" />
                    <Star className="w-6 h-6 text-yellow-300 mr-2" />
                    <Star className="w-6 h-6 text-yellow-300 mr-2" />
                    <Star className="w-6 h-6 text-yellow-300 mr-2" />
                    <Star className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Pronto para revolucionar seus estudos?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Junte-se aos milhares de estudantes que já descobriram o poder dos flashcards inteligentes
                  </p>
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Começar Gratuitamente
                  </Button>
                </Card>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;