import React, { useState } from "react";
import { Gift, Heart } from "lucide-react";

const loveMessages = [
  "Cada dia ao seu lado é uma nova aventura que me faz sorrir!",
  "Seu sorriso ilumina até os meus dias mais escuros.",
  "Você é o meu presente favorito, desembrulhado todos os dias.",
  "Meu coração bate mais forte quando estou com você.",
  "Você é a razão do meu sorriso todos os dias.",
  "Seu amor me faz querer ser uma pessoa melhor a cada dia.",
  "Eu te amo mais do que as palavras podem expressar.",
  "Você é o sonho que eu nunca sabia que tinha.",
  "Cada momento com você é um tesouro que guardo no coração.",
  "Seu amor me completa de uma forma que nunca imaginei possível.",
  "Com você, todos os dias são especiais.",
  "Você é a luz que ilumina meu caminho.",
  "O amor que sinto por você cresce a cada segundo.",
  "Estar ao seu lado é tudo o que preciso para ser feliz.",
  "Você é o pedaço que faltava no meu coração.",
  "Meu mundo é muito mais bonito com você nele.",
  "Amar você é a melhor escolha que já fiz.",
  "Seus abraços são meu lugar favorito no mundo.",
  "Nada se compara ao brilho dos seus olhos.",
  "Você é a melodia perfeita da minha vida.",
  "Minha felicidade começa quando vejo seu sorriso.",
  "Com você, cada dia é um novo capítulo de amor.",
  "Seus beijos são como estrelas que iluminam minha alma.",
  "Você transforma meus dias comuns em momentos mágicos.",
  "Te amar é o que me faz verdadeiramente feliz.",
  "Você é meu lar, meu refúgio e meu amor eterno.",
  "Nada no mundo pode substituir o amor que sinto por você.",
  "Você é a melhor parte de mim.",
  "O amor que temos é o maior presente que a vida me deu.",
  "Cada batida do meu coração sussurra seu nome.",
  "Seus olhos refletem o amor mais puro e verdadeiro.",
  "O destino foi generoso ao me dar você.",
  "Minha vida se tornou mais colorida desde que te conheci.",
  "Você é meu sonho realizado.",
  "Seus carinhos são a melhor parte do meu dia.",
  "Eu poderia passar a eternidade te amando.",
  "Com você, o amor é sempre leve e verdadeiro.",
  "Seus abraços são meu porto seguro.",
  "Minha vida é um conto de fadas porque tenho você.",
  "Cada segundo ao seu lado vale uma eternidade.",
  "Seu amor me dá forças para enfrentar qualquer desafio.",
  "Nada é mais doce do que o som da sua voz.",
  "Você é a poesia que dá sentido ao meu coração.",
  "Nosso amor é a melhor história já escrita.",
  "Meu coração pertence a você, agora e para sempre.",
  "Você é meu amor, minha vida, meu tudo.",
  "Cada momento com você é uma bênção que agradeço todos os dias.",
  "Nosso amor é a coisa mais linda que já experimentei.",
  "Nada pode apagar o amor imenso que sinto por você.",
  "Você é o meu final feliz em todas as histórias.",
  "Te amar é a melhor decisão que já tomei na vida.",
];

const LoveGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [floatingHearts, setFloatingHearts] = useState<
    { id: number; x: number }[]
  >([]);

  const openGift = () => {
    if (!isOpen) {
      const randomIndex = Math.floor(Math.random() * loveMessages.length);
      setMessage(loveMessages[randomIndex]);
      setIsOpen(true);

      const newHearts = [];
      for (let i = 0; i < 10; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 80 + 10, // position between 10% and 90%
        });
      }
      setFloatingHearts(newHearts);

      // Reset after a while
      setTimeout(() => {
        setIsOpen(false);
        setFloatingHearts([]);
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-script text-center mb-8 text-love-deeper">
        Um Presente Especial Para Você
      </h2>

      <div className="relative w-full max-w-md p-10 flex flex-col items-center">
        <button
          onClick={openGift}
          className={`relative transform transition-all duration-500 ${
            isOpen ? "animate-open-gift" : "hover:scale-105"
          }`}
          aria-label="Abrir presente"
        >
          <div className="relative z-10">
            {isOpen ? (
              <Heart className="w-24 h-24 text-love-deeper fill-love-deeper" />
            ) : (
              <Gift className="w-24 h-24 text-love-deeper" />
            )}
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/10 rounded-full blur-md"></div>
        </button>

        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-0 text-love-deeper animate-float-up"
            style={{
              left: `${heart.x}%`,
              animationDelay: `${heart.id * 0.1}s`,
            }}
          >
            <Heart className="w-5 h-5 fill-love-deeper" />
          </div>
        ))}

        {isOpen && (
          <div className="mt-10 glass p-6 rounded-xl max-w-sm text-center animate-fade-in">
            <p className="font-script text-xl text-love-deeper">{message}</p>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-love-dark opacity-80">
          {isOpen
            ? "Espere para abrir novamente..."
            : "Clique no presente para uma surpresa!"}
        </p>
      </div>
    </div>
  );
};

export default LoveGift;
