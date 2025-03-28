import React from "react";
import PulsatingHearts from "../components/PulsatingHearts";
import RelationshipBanner from "../components/RelationshipBanner";
import RelationshipTimeline from "../components/RelationshipTimeline";
import LoveGift from "../components/LoveGift";
import LoveLetter from "../components/LoveLetter";

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <PulsatingHearts />

      <header className="w-full py-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-fancy text-love-deeper mb-4">
          Nossa História de Amor
        </h1>
        <p className="text-xl font-script text-love-dark">
          Um amor que cresce a cada dia
        </p>
      </header>

      <main className="w-full max-w-6xl mx-auto px-4">
        <section className="mb-16 mt-8">
          <RelationshipBanner />
        </section>

        <section className="mb-16">
          <RelationshipTimeline />
        </section>

        <section className="mb-16">
          <LoveGift />
        </section>

        <section className="mb-16">
          <LoveLetter />
        </section>
      </main>

      <footer className="w-full text-center py-8 text-love-dark opacity-80">
        <p className="font-script text-lg">💕 Criado com muito amor 💕</p>
      </footer>
    </div>
  );
};

export default Index;
