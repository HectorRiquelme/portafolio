const stats = [
  { value: '15+', label: 'Proyectos' },
  { value: '5+', label: 'Tecnologias' },
  { value: 'Chile', label: 'Ubicacion' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Sobre Mi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full fade-in" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Soy desarrollador Full Stack con enfoque en integraciones, e-commerce y automatizaciones
              inteligentes. Trabajo con empresas chilenas ayudandolas a conectar sus plataformas de venta
              con pasarelas de pago como <span className="text-cyan-400 font-medium">Transbank</span> y{' '}
              <span className="text-cyan-400 font-medium">Khipu</span>, integrarse con el{' '}
              <span className="text-cyan-400 font-medium">SII</span> para facturacion electronica, y
              automatizar procesos de negocio con CRMs y bots con IA.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Mi experiencia abarca desde el desarrollo de tiendas online en{' '}
              <span className="text-emerald-400 font-medium">WooCommerce</span> y{' '}
              <span className="text-emerald-400 font-medium">Shopify</span> hasta la construccion de
              microservicios y APIs REST, pasando por la implementacion de chatbots y sistemas de
              cobranza automatizada.
            </p>
            <p className="text-slate-400 text-base">
              Comprometido con escribir codigo limpio, documentado y mantenible. Cada proyecto que
              construyo esta pensado para resolver problemas reales del mercado chileno.
            </p>
          </div>

          <div className="fade-in-right">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-800/30 border border-slate-700/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-cyan-400">&#9670;</span> Enfoque
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  Integraciones con plataformas chilenas (SII, Transbank, Khipu)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  E-commerce adaptado al mercado local (RUT, comunas, IVA 19%)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  Automatizaciones con IA y bots inteligentes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">&#10003;</span>
                  CRMs y pipelines de ventas personalizados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
