import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center text-gray-800 font-sans">
      {/* HEADER */}
      <header className="text-center mt-20 mb-16">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          <span className="text-blue-600">Colton Davis</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Biomedical  Engineer
        </h2>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-3xl px-6 flex flex-col items-center gap-10">
        {/* Intro */}
        <section className="text-center">
          <p className="text-lg leading-relaxed text-gray-1000">
            I love to design and create medical and robotic technologies focused on improving
            every day life.
          
          </p>
        </section>

        {/* Projects */}
<section className="bg-white p-8 rounded-3xl shadow-lg w-full text-center">
  <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
    💡 Featured Projects
  </h3>

  <div className="space-y-8">
    {/* Tesla Valve */}
    <div>
      <h4 className="font-semibold text-xl text-blue-600 mb-2">
        Design Engineer - Tesla Valve Integrated Catheter System
      </h4>
      <p className="text-gray-600 leading-relaxed">
        A novel design aimed at reducing Catheter-Associated Urinary Tract Infections (CAUTIs)
        through passive, one-way fluid control inspired by biomimetic flow systems.
      </p>
    </div>

    {/* STAT Tourniquet }
    <div>
      <h4 className="font-semibold text-xl text-blue-600 mb-2">
        NDA
      </h4>
      <p className="text-gray-600 leading-relaxed">
       NDA
      </p>
    </div> */}

    {/* Smart Composter */}
    <div>
      <h4 className="font-semibold text-xl text-blue-600 mb-2">
        Design Engineer - Smart Composter  
      </h4>
      <p className="text-gray-600 leading-relaxed">
        An automated sensing system that reads out temperature, humidity,
        and compost health and emails them directly to the customer, alongside recommendations
        and instructions for care.
      </p>
    </div>
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
            <a
              href="mailto:colton.davis@example.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              jcoltondavis@gmail.com
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
