import React from 'react';
import './App.css';

function ProjectBlock({ title, subtitle, description, team = [], clinicalMentors = [], diagrams = [] }) {
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

        {/* Team members */}
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

        {/* Clinical mentors (new) */}
        {clinicalMentors && clinicalMentors.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Clinical mentors</h4>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              {clinicalMentors.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Diagrams */}
        <div>
          <h4 className="font-semibold mb-2">Diagrams, images, and PDF hyperlinks</h4>
          <div className="flex flex-wrap gap-4">
            {diagrams.length === 0 && (
              <div className="text-sm text-gray-500">No diagrams uploaded</div>
            )}

            {diagrams.map((u, i) => (
              <div key={i} className="w-1/2">
                {isImage(u) ? (
                  <img
                    src={u}
                    alt={`diagram-${i}`}
                    className="w-full h-auto rounded shadow"
                  />
                ) : (
                  <a
                    href={u}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline"
                    style={{ color: '#8C1D40' }}
                  >
                    {u.split('/').pop().replace(/\.[^/.]+$/, '')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

export default function App() {
  const projects = [
    {
      title: 'Current Capstone Project: Under NDA',
      subtitle: 'Design and Manufacturing Engineer',
      description:
        'Current plans are under NDA. I am working on embedded system design with ESP32 and piezoresistive sensor integration, data acquisition, and wireless communication. Focusing on low-power design, real-time processing, and ISO standard equipment.',
      team: [
        'Colton Davis',
        'Nathan Amyot',
        'Cohen Jefferies',
        'Joseph Rodriguez',
        'Colin Stafford'
      ],

      clinicalMentors: [
        'Creighton School of Medicine',
        'Nidhi Ramesh',
        'Dr. Gaby Iskander'
      ],
      diagrams: []
    },
    {
      title: 'Mouth-controlled PC mouse',
      subtitle: 'Engineer',
      description:
        'Designed an embedded assistive-tech device converting oral gestures into mouse inputs. Developed custom sensor interface circuitry for pressure and motion detection, displayed waveform charts and data for real-time signal analysis, and implemented filtering to ensure stable cursor control. Focused on low-latency processing, device ergonomics, and effective communication. The software was created in LabVIEW',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['website-Files/pcmouse/designhistory.pdf','website-Files/pcmouse/labview.png'],
    },
    {
      title: 'MyoTens — Muscle Atrophy Prevention',
      subtitle: 'Engineer',
      description:
        'Developed a neuromuscular stimulation system integrating an ESP 32 controlled Tens Unit to integrate, safety regulated pulse generation, and digital waveform analysis. Designed a circuit for controlled current delivery. Designed filtering, feedback sensing, and firmware to produce safe, precise stimulation.',
      team: ['Colton Davis', 'Anne Harrison', 'Tyler Labrecque', 'Zaki Amish'],
      diagrams: ['/website-files/myotens/theory.png', 'website-files/myotens/code.png', 'website-files/myotens/circuit.png'],
    },
    {
      title: 'Tesla Valve Integrated Catheter System',
      subtitle: 'Design Engineer',
      description:
        'Novel catheter device integrating passive Tesla valve flow geometry with embedded sensing concepts for future development. Worked on early electrical subsystem architecture, including pressure/flow sensor selection, low power data acquisition, and integration pathways for microcontroller based monitoring to support CAUTI-reduction strategies.',
      team: ['Colton Davis', 'Nathan Amyot', 'Cohen Jefferies', 'Joseph Rodriguez', 'Colin Stafford'],
      diagrams: ['website-files/teslavalve/presentation.pdf','website-files/teslavalve/tesla.png'],
    },
    {
      title: 'Smart Pill Dispenser',
      subtitle: 'Design Engineer',
      description:
        'Embedded system built with Arduino for automated medication dispensing. Responsible for electrical design, sensor integration (IR/optical confirmation), motor/servo control, and low power firmware. I implemented real-time event driven logic.',
      team: ['Colton Davis', 'Tyler Labrecque', 'Eric Shoenling', 'Hannah Yang'],
      diagrams: ['website-files/smart-pills/threed.png', 'website-files/smart-pills/circuit.png'],
    },
    {
      title: 'Smart Composter',
      subtitle: 'Design Engineer',
      description:
        'I designed a compost monitoring system using ESP32 for wireless telemetry and multi-sensor data acquisition (temperature, humidity). Designed firmware for periodic sampling, environmental trend analysis, and automated email reporting. Integrated low-power modes, ADC calibration, and robust enclosure-level electrical layout for long-term outdoor deployment.',
      team: [
        'Colton Davis',
        'Nathan Amyot',
        'Denise Hill',
        'Cohen Jefferies',
        'Genevieve Lexa',
        'Patrick Ohara',
        'Emma Tapia',
        'Heather Taylor',
      ],
      diagrams: ['website-files/smartcomposter/codecombined.pdf','website-files/smartcomposter/composter.png', 'website-files/smartcomposter/tinker.png','website-files/smartcomposter/team.png'],
    },
    {
      title: 'Pulse oximeter',
      subtitle: 'Field Engineer',
      description:
        'Custom pulse oximetry device involving stretch resistor "sensing" using a voltage divider and the output voltage of the stretch sensor, along with a high gain analog front end design. Programmed LabVIEW block diagram and front panel consisting of digital filtering, peak detection, and a simple display/UI.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['website-files/pulse-oximeter/pulseox.pdf', 'website-files/pulse-oximeter/blockdiagram.png'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans px-4">
      <header className="text-center mt-12 mb-12 w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span style={{ color: '#000000ff' }}>Colton Davis</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">ASU Engineering Senior</h2>
      </header>

      <main className="w-full max-w-3xl px-6 flex flex-col items-center gap-8">
        <section className="text-center">
          <p className="text-lg leading-relaxed text-gray-900">
            Here is my portfolio that I created entirely with JavaScript!
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
                clinicalMentors={p.clinicalMentors || []}
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

      <footer className="mt-12 mb-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Colton Davis — All Rights Reserved.
      </footer>
    </div>
  );
}