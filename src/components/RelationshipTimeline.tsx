import React from "react";

// Replace with your actual timeline events
const timelineEvents = [
  {
    date: "29/07/2023",
    title: "Primeira Foto",
    description: "O dia em que tudo começou... (não exatamente hehe)",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-5518.jpg",
  },
  {
    date: "31/08/2023",
    title: "Escondidinhos perto da sua casa...",
    description: "Neste dia já havia me perdido em seus braços...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-3357.jpg",
  },
  {
    date: "07/10/2023",
    title: "Primeira vez indo ao Jardim secreto ",
    description: "Que lugar bonito ein...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-6372.jpg",
  },
  {
    date: "20/10/2023",
    title: "Nossa primeira viagem juntos (indo conhecer o sogro)",
    description: "Você passou mal na churrascaria (ódio)...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1103.jpg",
  },
  {
    date: "22/10/2023",
    title: "Primeira vez na casa do sogro",
    description: "Estava bem nervoso esse dia...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-4864.jpg",
  },
  {
    date: "25/12/2023",
    title: "Primeiro Natal juntos",
    description: "Sei como você ama essa época...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-2863.jpg",
  },
  {
    date: "31/12/2023",
    title: "Primeiro ano novo juntos...",
    description: "Brincamos bastante esse dia ...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-695.jpg",
  },
  {
    date: "11/05/2024",
    title: "Indo comer japa (eco)",
    description: "Não gosto, mas fazer o que né...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1188.JPG",
  },
  {
    date: "06/07/2024",
    title: "Fazer umas comprinhas?...",
    description: "As parcelas já estão acabando?",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-4421.jpg",
  },
  {
    date: "09/12/2024",
    title: "Nossa primeira árvore de natal.",
    description: "Que momento feliz...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-1340.JPG",
  },
  {
    date: "19/12/2024",
    title: "Segundo vez indo ao Oscar Niemeyer .",
    description: "Tá virando tradição ir ein...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-5262.JPG",
  },
  {
    date: "09/12/2024",
    title: "Segundo natal juntos.",
    description: "Continua amando essa data...",
    image:
      "https://inscricao.faculdadefama.edu.br/api/uploads/2025-03-27/BANNER-279.JPG",
  },
];

const RelationshipTimeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl sm:text-4xl font-script text-center mb-12 text-love-darker">
        Nossa História de Amor
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-love-dark bg-opacity-30"></div>

        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              <div className="timeline-dot"></div>
              <div
                className={`md:w-5/12 glass rounded-xl overflow-hidden shadow-lg ${
                  index % 2 === 0
                    ? "md:mr-auto md:animate-slide-in-left"
                    : "md:ml-auto md:animate-slide-in-right"
                } animate-slide-up`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-contain md:h-fit md:object-cover bg-y-"
                />
                <div className="p-4">
                  <div className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-love-medium text-white rounded-full">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-love-deeper">
                    {event.title}
                  </h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationshipTimeline;
