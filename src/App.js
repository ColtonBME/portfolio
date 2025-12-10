import React from 'react';
import './App.css';

function ProjectBlock({ title, subtitle, description, team = [], diagrams = [] }) {
  const isImage = (url) => /\.(png|jpe?g|gif|svg)$/i.test(url);

  return (
    <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
      <summary
        className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
        style={{ color: '#8C1D40' }}
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
                    <a href={u} target="_blank" rel="noreferrer" className="text-sm underline" style={{ color: '#8C1D40' }}>
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
    // Top-priority projects moved first
    {
      title: 'Mouth-controlled PC mouse',
      subtitle: 'Engineer',
      description:
        'Assistive human-computer interface using pressure and motion sensors integrated with a microcontroller to translate oral gestures into cursor movement and click events. Contributions include sensor calibration, analog signal conditioning, microcontroller firmware, and USB-HID communication for real-time control. This project software was created and tested in LabVIEW.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: [],
    },
    {
      title: 'MyoTens — Muscle Atrophy Prevention',
      subtitle: 'Engineer',
      description:
        'Biomedical stimulation system combining analog front-end circuitry with embedded digital control. Designed and tuned a multi-stage signal chain for muscle activation, including current-controlled drivers, waveform generation, and safety interlocks. Implemented microcontroller-based timing routines and pulse-width control algorithms for targeted neuromuscular stimulation.',
      team: ['Colton Davis', 'Anne Harrison', 'Tyler Labrecque', 'Zaki Amish'],
      diagrams: ['/website-files/MyoTens/Theoretical_Design_Presentation.pdf'],
    },

    // Remaining projects
    {
      title: 'Tesla Valve Integrated Catheter System',
      subtitle: 'Design Engineer',
      description:
        'Novel catheter platform integrating passive Tesla valve flow geometry with embedded sensing concepts for future development. Worked on early electrical subsystem architecture, including pressure/flow sensor selection, low power data acquisition planning, and integration pathways for ESP 32 based monitoring to support CAUTI-reduction strategies.',
      team: ['Colton Davis', 'Nathan Amyot', 'Cohen Jefferies', 'Joseph Rodriguez', 'Colin Stafford'],
      diagrams: [],
    },
    {
      title: 'Arduino Uno Automated Pill Dispenser',
      subtitle: 'Design Engineer',
      description:
        'Embedded system built on Arduino architecture for automated medication dispensing. Responsible for electrical design, sensor integration (IR/optical confirmation), motor/servo control, and low power firmware. Implemented event driven logic.',
      team: ['Colton Davis', 'Tyler Labrecque', 'Eric Shoenling', 'Hannah Yang'],
      diagrams: [],
    },
    {
      title: 'Smart Composter',
      subtitle: 'Design Engineer',
      description:
        'Enabled compost monitoring system using ESP32 for wireless telemetry and multi-sensor data acquisition (temperature, humidity). Designed firmware for periodic sampling, environmental trend analysis, and automated email reporting. Integrated low-power modes, ADC calibration, and robust enclosure-level electrical layout for long-term outdoor deployment',
      team: ['Colton Davis', 'Nathan Amyot', 'Denise Hill', 'Cohen Jefferies', 'Genevieve Lexa', 'Patrick Ohara', 'Emma Tapia', 'Heather Taylor'],
      diagrams: ['Website-Files/SmartComposter/Composter_Design.png'],
    },
    {
      title: 'Pulse oximeter',
      subtitle: 'Field Engineer',
      description:
        'Custom pulse oximetry device involving stretch resistor "sensor" and high-gain analog front-end design for photoplethysmography (PPG). Programmed LabVIEW block diagram for digital filtering, peak detection and supporting UI.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['/Website-Files/Pulse-Oximeter/Pulse_Oximeter_Theoretical_Design.pdf'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans px-4">
      <header className="text-center mt-12 mb-12 w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span style={{ color: '#8C1D40' }}>Colton Davis</span>
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
            <a href="mailto:jcoltondavis@gmail.com" className="font-semibold hover:underline" style={{ color: '#8C1D40' }}>
              jcoltondavis@gmail.com
            </a>
            <br />
            Call or text @{' '}
            <a href="tel:928-243-4069" className="font-semibold hover:underline" style={{ color: '#8C1D40' }}>
              928-243-4069
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-12 mb-8 text-sm text-gray-500 text-center">© {new Date().getFullYear()} Colton Davis — All Rights Reserved.</footer>
    </div>
  );
}