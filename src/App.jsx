const companies = [
  {
    name: "Parzik",
    description:
      "Plataforma tecnológica que acelera negocios con software, analítica y automatización.",
    logo: "https://parzik.s3.sa-east-1.amazonaws.com/parzikLogoWhiteHorizontal.png",
    url: "https://www.parzik.com/",
  },
  {
    name: "Bianca Odontología Especializada",
    description:
      "Clínica de alta especialidad con enfoque en experiencia premium y precisión clínica.",
    logo: "https://bianca-dental.s3.sa-east-1.amazonaws.com/biancaLogoWhite.png",
    url: "https://www.dentalbianca.com/",
  },
  {
    name: "Luxor Styling",
    description:
      "Barbería premium con curaduría de imagen, atención personalizada y estilo contemporáneo.",
    logo: "https://luxor-barber.s3.sa-east-1.amazonaws.com/luxorLogo.png",
    url: "https://www.luxorstyling.com/",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="bg-grid">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://i.postimg.cc/6qP8hth9/Whats-App-Image-2025-12-26-at-23-05-13-removebg-preview.png"
                alt="Andesa Group"
                className="h-20 w-auto md:h-24"
              />
              <div className="text-xs uppercase tracking-[0.5em] text-white/60">
                Holding de inversión
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span>Armenia, Quindío</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 md:inline-block" />
              <a
                className="text-white transition hover:text-white/90"
                href="mailto:info@andesagroup.com"
              >
                info@andesagroup.com
              </a>
            </div>
          </header>

          <section className="relative mt-16 grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Ecosistema de impacto
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Inversión multisectorial que conecta industrias
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Andesa Group estructura y potencia un ecosistema empresarial
                respaldado por innovación tecnológica, software y nuevas
                tecnologías, con operaciones en Colombia y el exterior
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="pill">Innovación aplicada</span>
                <span className="pill">Software & data</span>
                <span className="pill">Crecimiento sostenible</span>
              </div>
            </div>
            <div className="relative">
              <div className="orb" />
              <div className="glass-card">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Presencia
                </p>
                <div className="mt-6 grid gap-6">
                  <div>
                    <p className="text-3xl font-semibold">3</p>
                    <p className="mt-1 text-sm text-white/60">
                      Empresas activas
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">3+</p>
                    <p className="mt-1 text-sm text-white/60">
                      Mercados
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold">100%</p>
                    <p className="mt-1 text-sm text-white/60">
                      Foco en tecnología
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="stat-card">
                  <p className="text-sm text-white/70">
                    Estrategia de inversión basada en talento, data y ejecución.
                  </p>
                </div>
                <div className="stat-card">
                  <p className="text-sm text-white/70">
                    Arquitectura financiera y operativa para escalar negocios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20" id="ecosistema">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Empresas
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Un portafolio con ADN tecnologico.
                </h2>
              </div>
              <p className="max-w-md text-sm text-white/60">
                Cada compañía comparte una visión: transformar industrias con
                excelencia operativa, experiencia premium y tecnología.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {companies.map((company) => (
                <article className="company-card" key={company.name}>
                  <div className="company-logo">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <img src={company.logo} alt={company.name} />
                    </a>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white/90"
                    >
                      {company.name}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm text-white/65">
                    {company.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="cta">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Contacto
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Construyamos el siguiente capítulo del ecosistema.
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-white/60">
                  Desde Armenia, Quindío, articulamos operaciones locales e
                  internacionales para impulsar negocios con ambición y
                  estructura.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-sm text-white/70">Armenia, Quindío</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
