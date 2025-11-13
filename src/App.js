import './App.css';

// test change 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans">
      {/* HEADER */}
      <header className="text-center mt-20 mb-16">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span style={{ color: '#8C1D40' }}>Colton Davis</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Biomedical  Engineering Student
        </h2>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-3xl px-6 flex flex-col items-center gap-10">
        {/* Intro */}
        <section className="text-center">
          <p className="text-lg leading-relaxed text-gray-900">
            Here are some of my favorite projects I have had the privelage to work on!
          </p>
        </section>

        {/* Projects */}
        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-3 text-gray-800 border-b border-gray-200 pb-3">
            💡 Featured Projects
          </h3>

          <div className="space-y-4 text-left">
            {/* ECG */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Engineer - MyoTens Muscle Atrophy Prevention</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                Using analog front-end and digital processing for electrocardiography. I worked 
                with a team to create a muscle stimulation device that sends a small pulse through
                muscle that is surrounding injured bones in order to prevent muscle atrophy based
                on literature.
              </div>
            </details>

            {/* Mouth-controlled Computer Mouse */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Engineer - Mouth-controlled PC mouse</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
              Worked in a partnership to design and create
              an assistive technology device translating
              oral movements into cursor control and clicks.
              </div>
            </details>

            {/* Pulse oximeter */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Field Engineer - Pulse oximeter</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                Design and prototyping of pulse oximetry hardware/software: optical sensor selection,
                wavelength timing, signal conditioning, SpO2 algorithm prototyping, and user-interface
                considerations for reliability and usability.
              </div>
            </details>

            {/* Tesla Valve */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Design Engineer - Tesla Valve Integrated Catheter System</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                A novel design aimed at reducing Catheter-Associated Urinary Tract Infections (CAUTIs)
                through passive, one-way fluid control inspired by biomimetic flow systems.
              </div>
            </details>

            {/* Microcomputers / Smart Pill Dispenser */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Design Engineer - Smart Pill Dispenser</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                Projects using microcontrollers and single-board computers (ESP32, Raspberry Pi)
                for data acquisition, device control, and wireless telemetry. Includes sensor
                integration, low-power design, and basic RTOS/firmware work.
              </div>
            </details>

            {/* Smart Composter */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Design Engineer - Smart Composter</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                An automated sensing system that reads temperature, humidity, and compost health and
                emails them directly to the customer, alongside recommendations and instructions for care.
              </div>
            </details>

            {/* NDA (kept minimal) */}
            <details className="group bg-gray-50 rounded-xl p-4 border border-gray-100">
              <summary
                className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold"
                style={{ color: '#8C1D40' }}
              >
                <span>Design and Manufacturing Engineer — STAT Tourniquet (NDA)</span>
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                Details are under NDA. Contact me for approved summaries and collaboration inquiries.
              </div>
            </details>
          </div>
        </section>

        {/* Engineering Focus */}
        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
            🛠 Engineering Skills
          </h3>
          <ul className="text-left list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Design & Prototyping (Fusion 360)</li>
            <li>Embedded Systems (ESP32, Arduino, Device to Phone Communication)</li>
            <li>Process Optimization</li>
            <li>Excel and Python Data Processing and Analysis</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-3">
            📫 Contact Info
          </h3>
          <p className="text-gray-700 text-lg">
            Interested in collaboration or learning more? <br />
            Email me @{' '}
            <a
              href="mailto:jcoltondavis@gmail.com"
              className="font-semibold hover:underline"
              style={{ color: '#8C1D40' }}
            >
              jcoltondavis@gmail.com
            </a>
            <br />
            Personal Contact @{' '}
            <a
              href="tel:928-243-4069"
              className="font-semibold hover:underline"
              style={{ color: '#8C1D40' }}
            >
              928-243-4069
            </a>
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 mb-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Colton Davis — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
