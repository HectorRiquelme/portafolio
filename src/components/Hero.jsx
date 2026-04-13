export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-cyan-400 font-medium mb-4 tracking-wider uppercase text-sm fade-in">
          Bienvenido a mi portafolio
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 fade-in">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Hector Riquelme
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mb-4 fade-in">
          Desarrollador Full Stack
        </h2>
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed fade-in">
          Especialista en integraciones, e-commerce y automatizaciones con IA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            Contacto
          </a>
        </div>

        <div className="flex justify-center gap-6 fade-in">
          <a
            href="https://github.com/HectorRiquelme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:hectorariquelmec@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
