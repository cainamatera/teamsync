'use client';

import { AboutSidebar } from '@/components/about-sidebar';
import { PublicNavbar } from '@/components/public-navbar';
import { useState } from 'react';

const techSections = [
  {
    title: 'Linguagem Principal',
    techs: [
      {
        name: 'TypeScript',
        description:
          'Adotado em todo o projeto, tanto no front-end quanto no back-end, para garantir a segurança de tipos, facilitar a manutenção e reduzir bugs em tempo de desenvolvimento. A tipagem estrita nos permite construir uma base de código robusta e auto-documentada.',
      },
    ],
  },
  {
    title: 'Front-end',
    techs: [
      {
        name: 'Next.js (React)',
        description:
          'Escolhido como o framework principal para a interface do usuário devido à sua performance excepcional, otimização de SEO através de Server-Side Rendering (SSR) e um ecossistema rico que acelera o desenvolvimento.',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Utilizado para a estilização, permitindo a construção de um design system customizável e consistente através de classes utilitárias. A configuração de temas (Light/Dark) foi implementada com variáveis CSS para uma troca de aparência instantânea e eficiente.',
      },
      {
        name: 'Framer Motion',
        description:
          'Integrado para criar animações fluidas e microinterações, elevando a experiência do usuário a um nível premium, com transições suaves e feedback visual intuitivo.',
      },
    ],
  },
  {
    title: 'Back-end',
    techs: [
      {
        name: 'NestJS (Node.js)',
        description:
          'Framework escolhido para a API devido à sua arquitetura modular e opinativa, que promove um código organizado e escalável. Seu suporte nativo a TypeScript e a injeção de dependências foram cruciais para a estrutura do projeto.',
      },
      {
        name: 'PostgreSQL',
        description:
          'Selecionado como nosso banco de dados relacional pela sua robustez, performance em consultas complexas e confiabilidade para armazenar os dados críticos da aplicação, como usuários, projetos e tarefas.',
      },
      {
        name: 'WebSockets',
        description:
          'Tecnologia fundamental para as funcionalidades de comunicação em tempo real, como o chat da equipe, indicadores de presença e notificações instantâneas.',
      },
    ],
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(techSections[0].title);

  const currentSection = techSections.find(
    (section) => section.title === activeSection,
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex space-x-8">
          <AboutSidebar
            sections={techSections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />
          <main className="flex-1">
            {currentSection && (
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-primary">
                  {currentSection.title}
                </h1>
                <ul className="mt-6 space-y-6">
                  {currentSection.techs.map((tech) => (
                    <li key={tech.name}>
                      <h2 className="text-xl font-bold text-accent">
                        {tech.name}
                      </h2>
                      <p className="mt-2 text-muted-foreground">
                        {tech.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

