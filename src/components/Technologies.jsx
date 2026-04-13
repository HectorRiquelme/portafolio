import { techCategories } from '../data/technologies';

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto fade-in">
            Herramientas y tecnologias que utilizo para construir soluciones completas
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mt-4 fade-in" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="scale-in bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/30 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
