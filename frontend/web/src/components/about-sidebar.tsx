'use client';

interface Section {
  title: string;
}

interface AboutSidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (title: string) => void;
}

export function AboutSidebar({
  sections,
  activeSection,
  onSectionClick,
}: AboutSidebarProps) {
  return (
    <aside className="w-56 flex-shrink-0">
      <nav className="sticky top-24">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Tecnologias
        </h3>
        <ul className="mt-4 space-y-2">
          {sections.map((section) => (
            <li key={section.title}>
              <button
                onClick={() => onSectionClick(section.title)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === section.title
                    ? 'bg-muted text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
