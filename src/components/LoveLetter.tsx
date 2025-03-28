import React from "react";

const LoveLetter = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div className="w-full max-w-4xl mx-auto py-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-script text-center mb-8 text-love-deeper">
        Uma Carta Para Meu Amor
      </h2>

      <div className="vintage-paper w-full max-w-lg p-8 rounded-lg shadow-lg transform rotate-1">
        <div className="mb-6 text-right">
          <div className="font-script text-vintage-ink opacity-70">{date}</div>
        </div>

        <div className="mb-6">
          <p className="font-script text-2xl mb-2">
            Meu Amoiro, Amanda Araujo Alves
          </p>
        </div>

        <div className="space-y-4 font-script text-lg leading-relaxed">
          <p>
            Cada dia ao seu lado é como uma página de um livro de contos de
            fadas que nunca quero terminar de ler. Seu sorriso ilumina meu mundo
            de maneiras que palavras não conseguem descrever.
          </p>

          <p>
            Lembro de cada momento juntos como se fossem estrelas espalhadas no
            céu do nosso amor. Cada risada, cada lágrima, cada abraço... tudo
            está guardado no lugar mais especial do meu coração.
          </p>

          <p>
            Amanda, você é o sonho que eu nunca soube que tinha, a resposta para
            perguntas que eu ainda nem fiz. Seu amor me ensina todos os dias a
            ser uma pessoa melhor, a ver beleza onde antes eu não via.
          </p>

          <p>
            Prometo estar sempre ao seu lado, nos dias de sol e também nos dias
            de chuva. Prometo te amar não apenas nos momentos fáceis, mas
            especialmente nos momentos difíceis.
          </p>

          <p>Meu coração é seu, hoje e para sempre.</p>
        </div>

        <div className="mt-8 text-right">
          <p className="font-fancy text-2xl">Com todo meu amor,</p>
          <p className="font-script text-xl mt-2">Eliton Netto</p>
        </div>

        <div className="absolute -bottom-2 -right-2 w-20 h-20 text-love-deeper opacity-20 -rotate-12">
          ♥
        </div>
        <div className="absolute -top-2 -left-2 w-16 h-16 text-love-deeper opacity-20 rotate-12">
          ♥
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
