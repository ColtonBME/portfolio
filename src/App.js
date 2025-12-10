import React from 'react';
import './App.css';

function ProjectBlock({ title, subtitle, description, team = [], clinicalMentors = [], diagrams = [] }) {
  const isImage = (url) => /\.(png|jpe?g|gif|svg)$/i.test(url);

  return (
    <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
      <summary
        className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold text-black"
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

        {/* Clinical mentors */}
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
                    className="text-sm underline text-black"
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
        'Designed an embedded assistive-tech device converting oral gestures into mouse inputs. Developed custom sensor interface circuitry, real-time filtering, and LabVIEW software UI.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['website-files/pcmouse/designhistory.pdf','website-files/pcmouse/labview.png'],
    },
    {
      title: 'MyoTens — Muscle Atrophy Prevention',
      subtitle: 'Engineer',
      description:
        'Developed a neuromuscular stimulation system integrating ESP32-controlled TENS circuitry, waveform generation, and safe current delivery.',
      team: ['Colton Davis', 'Anne Harrison', 'Tyler Labrecque', 'Zaki Amish'],
      diagrams: ['website-files/myotens/theory.png', 'website-files/myotens/code.png', 'website-files/myotens/circuit.png'],
    },
    {
      title: 'Tesla Valve Integrated Catheter System',
      subtitle: 'Design Engineer',
      description:
        'Novel catheter system integrating Tesla valve flow geometry with early-stage embedded sensing for future CAUTI-reduction instrumentation.',
      team: ['Colton Davis', 'Nathan Amyot', 'Cohen Jefferies', 'Joseph Rodriguez', 'Colin Stafford'],
      diagrams: ['website-files/teslavalve/presentation.pdf','website-files/teslavalve/tesla.png'],
    },
    {
      title: 'Smart Pill Dispenser',
      subtitle: 'Design Engineer',
      description:
        'Arduino-based automated medication system with IR sensing, servo actuation, and real-time logic.',
      team: ['Colton Davis', 'Tyler Labrecque', 'Eric Shoenling', 'Hannah Yang'],
      diagrams: ['website-files/smart-pills/threed.png', 'website-files/smart-pills/circuit.png'],
    },
    {
      title: 'Smart Composter',
      subtitle: 'Design Engineer',
      description:
        'ESP32-based multi-sensor telemetry system with automated email reporting, ADC calibration, and low-power firmware.',
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
        'Custom stretch-sensor pulse oximeter using an analog front-end, digital filtering, peak detection, and LabVIEW UI.',
      team: ['Colton Davis', 'Tyler Labrecque'],
      diagrams: ['website-files/pulse-oximeter/pulseox.pdf', 'website-files/pulse-oximeter/blockdiagram.png'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans px-4">
      <header className="text-center mt-12 mb-6 w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span className="text-black">Colton Davis</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">ASU Engineering Senior</h2>
      </header>

      <main className="w-full max-w-3xl px-6 flex flex-col items-center gap-10">
        {/* ⭐ ABOUT SECTION (moved inside main so it matches Featured Projects size) */}
        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-3 text-gray-800 border-b border-gray-200 pb-3">
            👋 About Me
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Hello, my name is Colton Davis and I’m a Biomedical Engineering senior with an emphasis on electrical engineering
            and embedded systems. My work spans sensor integration, signal processing,
            PCB-level design, and microcontroller-based systems including ESP32, Arduino,
            and LabVIEW environments.
            <br /><br />
            I’ve engineered assistive-tech devices, medical sensing platforms,
            neuromuscular stimulation systems, and early-stage medical device concepts
            integrating real-time data acquisition and low-power architectures.
            <br /><br />
            I’m actively seeking engineering roles in embedded systems, R&D,
            medical devices, avionics, and high-reliability system development.
          </p>
        </section>

        {/* Featured Projects (same card class and width as About) */}
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

        {/* Contact */}
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

          <div className="mt-4">
            <a
              href='website-files/colton-davis-resume.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline"
            >
              View resume
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-12 mb-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Colton Davis — All Rights Reserved.
      </footer>
    </div>
  );
}