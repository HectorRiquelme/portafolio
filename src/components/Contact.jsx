import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto fade-in">
            Tienes un proyecto en mente? Conversemos!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-4 fade-in" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-in-left space-y-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Hablemos de tu proyecto</h3>
              <p className="text-slate-400 leading-relaxed">
                Ya sea una integracion con plataformas chilenas, una tienda online, un bot inteligente
                o cualquier automatizacion, estoy listo para ayudarte a hacerlo realidad.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hectorariquelmec@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div>hectorariquelmec@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/HectorRiquelme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">GitHub</div>
                  <div>github.com/HectorRiquelme</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Ubicacion</div>
                  <div>Chile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-colors resize-none"
                  placeholder="Cuentame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                {submitted ? 'Mensaje enviado!' : 'Enviar Mensaje'}
              </button>
              {submitted && (
                <p className="text-emerald-400 text-sm text-center">
                  Gracias por tu mensaje. Este formulario es solo demostrativo.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
