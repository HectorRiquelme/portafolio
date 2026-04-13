import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-content bg-slate-800 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con gradiente */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} rounded-t-2xl flex items-center justify-center`}>
          <span className="text-7xl">{project.icon}</span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 bg-black/30 rounded-full text-white text-xs font-medium backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{project.fullDesc}</p>

          {/* Caracteristicas */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Caracteristicas Principales
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                  <span className="text-emerald-400 mt-0.5 shrink-0">&#8226;</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Stack Tecnico
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-700/60 text-cyan-300 text-sm rounded-lg border border-slate-600/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Boton GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:opacity-90 transition-opacity`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver en GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
