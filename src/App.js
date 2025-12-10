import React from 'react';
import './App.css';

function ProjectBlock({ title, subtitle, description, team = [], diagrams = [] }) {
  const isImage = (url) => /\.(png|jpe?g|gif|svg)$/i.test(url);

  return (
    <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
      <summary
        className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
        style={{ color: '#000' }}
      >
        <div>
          <div>{title}</div>
          {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
        </div>
        <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
      </summary>

      <div className="mt-3 text-gray-700 leading-relaxed space-y-4">
        {description && <div>{description}</div>}

        {/* Team members (display only) */}
        <div>
          <h4 className="font-semibold mb-2">Team members</h4>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            {team.length === 0 ? (
              <li className="text-sm text-gray-500">No members listed</li>
            ) : (
              team.map((m, i) => <li key={i}>{m}</li>)
            )}
          </ul>
        </div>

        {/* 3D model section removed */}

        {/* Diagrams & images (display only) */}
        <div>
          <h4 className="font-semibold mb-2">Diagrams & images</h4>
          <div className="flex flex-wrap gap-3">
            {diagrams.length === 0 && <div className="text-sm text-gray-500">No diagrams uploaded</div>}
            {(() => {
              const isSmart = title && title.includes('Smart Composter');
              return diagrams.map((u, i) => (
                <div key={i} className={isImage(u) ? (isSmart ? 'w-56' : 'w-28') : ''}>
                  {isImage(u) ? (
                    <img
                      src={u}
                      alt={`diagram-${i}`}
                      className={isSmart ? 'w-full h-40 object-cover rounded' : 'w-full h-20 object-cover rounded'}
                    />
                  ) : (
                    <a href={u} target="_blank" rel="noreferrer" className="text-sm underline" style={{ color: '#000' }}>
                      {u.split("/").pop().replace(/\.[^/.]+$/, "")}
                    </a>
                  )}
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </details>
  );
}

export default function App() {
  const projects = [
    {
      title: 'Tesla Valve Integrated Catheter System',
      subtitle: 'Design Engineer',
      description:
        'A novel design aimed at reducing CAUTIs through passive, one-way fluid control inspired by biomimetic flow systems.',
      team: ['Colton Davis', 'Nathan Amyot', 'Cohen Jefferies', 'Joseph Rodriguez', 'Colin Stafford'],
      diagrams: [],
    },
    {
      title: 'Smart Pill Dispenser',
      subtitle: 'Design Engineer',
      description:
        'Project using Arduino for data acquisition, device control, telemetry, sensor integration and low-power design.',
      team: ['Colton Davis', 'Tyler Labrecque', 'Eric Shoenling', 'Hannah Yang' ],
      diagrams: [],
    },
    {
      title: 'Smart Composter',
      subtitle: 'Design Engineer',
      description:
        'Automated sensing system that reads temperature, humidity, and compost health and emails customers recommendations biweekly.',
      team: ['Colton Davis','Nathan Amyot', 'Denise Hill', 'Cohen Jefferies', 'Genevieve Lexa', 'Patrick Ohara', 'Emma Tapia', 'Heather Taylor'],
      diagrams: ['Website-Files/SmartComposter/Composter_Design.png'],
    },
    {
      title: 'Pulse oximeter',
      subtitle: 'Field Engineer',
      description:
        'Design and prototyping of pulse oximetry hardware/software: optical sensor selection, timing, signal conditioning, SpO2 algorithm prototyping, and UI.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['/Website-Files/Pulse-Oximeter/Pulse_Oximeter_Theoretical_Design.pdf'],
    },
    {
      title: 'MyoTens — Muscle Atrophy Prevention',
      subtitle: 'Engineer',
      description:
        'Using analog front-end and digital processing. I worked with a team to create a muscle stimulation device that sends small pulses through muscle surrounding injured bones to prevent atrophy.',
      team: ['Colton Davis', 'Anne Harrison','Tyler Labrecque', 'Zaki Amish'],
      diagrams: ['/website-files/MyoTens/Theoretical_Design_Presentation.pdf'], // e.g. ['/images/myotens-diagram.png']
    },
    {
      title: 'Mouth-controlled PC mouse',
      subtitle: 'Engineer',
      description:
        'Assistive technology translating oral movements into cursor control and clicks.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans px-4">
      <header className="text-center mt-12 mb-12 w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span style={{ color: '#000' }}>Colton Davis</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">ASU Engineering Senior</h2>
      </header>

      <main className="w-full max-w-3xl px-6 flex flex-col items-center gap-8">
        <section className="text-center">
          <p className="text-lg leading-relaxed text-gray-900">
            Here is my portfolio created by me entirely with JavaScript!
          </p>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-3 text-gray-800 border-b border-gray-200 pb-3">💡 Featured Projects</h3>

          <div className="space-y-4 text-left">
            {projects.map((p, i) => (
              <ProjectBlock
                  key={i}
                  title={p.title}
                  subtitle={p.subtitle}
                  description={p.description}
                  team={p.team}
                  diagrams={p.diagrams}
                />
            ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-3">📫 Contact Info</h3>
          <p className="text-gray-700 text-lg">
            Interested in collaboration or learning more?
            <br />
            <a href="mailto:jcoltondavis@gmail.com" className="font-semibold hover:underline" style={{ color: '#000' }}>
              jcoltondavis@gmail.com
            </a>
            <br />
            Call or text @{' '}
            <a href="tel:928-243-4069" className="font-semibold hover:underline" style={{ color: '#000' }}>
              928-243-4069
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-12 mb-8 text-sm text-gray-500 text-center">© {new Date().getFullYear()} Colton Davis — All Rights Reserved.</footer>
    </div>
  );
}