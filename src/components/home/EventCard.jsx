import React from 'react';
import './EventCard.css';
import EventCardItem from './EventCardItem.jsx';

import ErikAceiro from '../../assets/palestra-info/palestra28-06-25/erik-aceiro.jpg';
import GuilhermeMenaldo from '../../assets/palestra-info/palestra28-06-25/guilherme-menaldo-teste.jpg';

import MatheusBarros from '../../assets/palestra-info/palestra30-08-25/matheusBarros.png';
import FernandoMoraes from '../../assets/palestra-info/palestra30-08-25/fernandoMoraes.png';

import Foto1Inaugural from '../../assets/palestra-info/palestra28-06-25/foto1.jpg';
import Foto2Inaugural from '../../assets/palestra-info/palestra28-06-25/foto2.jpg';
import Foto3Inaugural from '../../assets/palestra-info/palestra28-06-25/foto3.jpeg';


import Foto1Evento300825 from '../../assets/palestra-info/palestra30-08-25/Foto1Evento30-08-25.jpg';
import Foto2Evento300825 from '../../assets/palestra-info/palestra30-08-25/Foto2Evento30-08-25.jpg';
import Foto3Evento300825 from '../../assets/palestra-info/palestra30-08-25/Foto3Evento30-08-25.jpg';


const events = [
  {
    title: 'Evento Inaugural',
    date: '2025-06-28',
    description:
      'Agradecemos a todos que participaram! Veja como foi o evento, palestrantes e fotos!',
    longDescription: `No dia 28 de junho de 2025, a Academia do Arquiteto de Software realizou seu evento de abertura, marcando o início das atividades do projeto de extensão.

A abertura foi conduzida pelo professor Frank José Affonso, seguida pela palestra de Erik Aceiro, com o tema "Além do Código: A Jornada de Dev, Arquiteto de Software e Staff Engineer", abordando caminhos de carreira e competências essenciais para o desenvolvimento profissional.

Já na segunda palestra, "Por que Arquitetura de Software Importa?", Guilherme Menaldo apresentou sobre boas práticas e escolhas estratégicas para a construção de softwares estáveis e projetos bem-sucedidos, destacando também a importância da comunicação e do trabalho em equipe.

O evento foi encerrado com os agradecimentos do professor Frank José Affonso e o convite para os próximos encontros do projeto.`,
    inscrever: '',
    linkfotos:
      'https://photos.google.com/share/AF1QipNdO_gHV3kkUOwoP_sw6KxQofA2FAiaGp8yEu8mcvhD0wXqVE2lcrSsnny8VwwidA?key=ZGcycEk0NE1yRFhfQi1FVFc4VlNIZkNNZ1dDc3hn',
    fotos: [Foto1Inaugural, Foto2Inaugural, Foto3Inaugural],
    palestras: [
      {
        nome: 'Erik Aceiro',
        titulo: 'Além do Código: A Jornada de Dev, Arquiteto de Software e Staff Engineer',
        imagem: ErikAceiro,
        link: 'https://www.linkedin.com/in/erikaceiro/',
        slides:
          'https://drive.google.com/file/d/1a_K9JrRze4u5C0UlvVJQkXmzgxsPXSNN/view?usp=sharing',
      },
      {
        nome: 'Guilherme Menaldo',
        titulo: 'Por que Arquitetura de Software Importa?',
        imagem: GuilhermeMenaldo,
        link: 'https://www.linkedin.com/in/ggmenaldo/',
        slides: 'https://drive.google.com/file/d/1nYQQCkahBYvCNBCXk7OxDGFCeSW1FWOm/view',
      },
    ],
  },
  {
    title: 'Arquitetura Orientada a Eventos & Micro Frontends',
    date: '2025-08-30',
    description:
      'Obrigado a todos que participaram! Veja um pouco mais sobre o resumo do evento!',
    longDescription: `No dia 30 de agosto de 2025, a Academia do Arquiteto de Software realizou mais um encontro do projeto de extensão, reunindo estudantes e profissionais interessados em arquitetura de software.

A primeira palestra, "Eventos: Revoluções em Tempo Real", foi conduzida por Matheus Barros, que abordou arquitetura orientada a eventos, explicando como sistemas reativos e escaláveis podem ser construídos e como essa abordagem impacta o desenvolvimento de software moderno.

Em seguida, Fernando Moraes apresentou "Mergulhando na Arquitetura Micro Frontends", explorando estratégias para decomposição de aplicações web em módulos independentes, destacando benefícios de manutenção, escalabilidade e colaboração entre equipes.

O evento foi encerrado com um momento especial de interação com o público, incluindo um sorteio de canecas, garrafas e chaveiros do Projeto, além de divulgação e apoio da comunidade Dev Rio Claro.`,
    inscrever: '',
    linkfotos:
      'https://photos.app.goo.gl/Gpvj715Mxg7xx2hp6',
    fotos: [Foto1Evento300825, Foto2Evento300825, Foto3Evento300825],
    palestras: [
      {
        nome: 'Matheus Barros',
        titulo: 'Eventos: Revoluções em Tempo Real',
        imagem: MatheusBarros,
        link: 'https://www.linkedin.com/in/barros42/',
        slides:
          'https://drive.google.com/file/d/1VekK6E3XkK2qz6Tr6Tk2y_sXGcxSQYy2/view?usp=sharing',
      },
      {
        nome: 'Fernando Moraes',
        titulo: 'Mergulhando na Arquitetura de Micro Frontends',
        imagem: FernandoMoraes,
        link: 'https://www.linkedin.com/in/fernando-moraes-4aab55135/ ',
        slides: 'https://drive.google.com/file/d/1NAVVTB1bT-_olUXDDDL7L68sIemuYj8T/view?usp=sharing',
      },
    ],
  },
];

// Ordena os eventos
const sortedEvents = events.sort((a, b) => {
  const dateA = new Date(a.date + 'T00:00:00');
  const dateB = new Date(b.date + 'T00:00:00');
  return dateB.getTime() - dateA.getTime();
});

const EventCard = ({ limit }) => {
  const eventsToShow = limit ? sortedEvents.slice(0, limit) : sortedEvents;

  return (
    <div className="container-fluid px-5 mt-5 maintitle-event-card">
      <h2 className="text-center fw-bold mb-4">Eventos</h2>

      <div className="row">
        {eventsToShow.map((event, index) => (
          <EventCardItem
            key={index}
            event={event}
            showPalestraInfo={index === 0} // Só no primeiro card
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard;
