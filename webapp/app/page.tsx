export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-600 to-violet-700 px-6 py-8 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-3xl bg-white/10 p-10 shadow-2xl backdrop-blur-xl sm:p-14">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-3 lg:pr-8">
            <p className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-semibold tracking-wide text-white/90">
              Instituto Virtual • SaaS UI
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Bienvenido a Instituto Virtual</h1>
            <p className="text-lg leading-7 text-white/85">
              Plataforma de gestión educativa en línea con cursos, certificaciones y soporte 24/7.
              Inicia sesión para administrar tus clases o continuar aprendiendo.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-white/20 sm:p-10">
            <h2 className="text-xl font-semibold text-slate-900">Iniciar sesión</h2>
            <p className="mt-2 text-sm text-slate-600">Introduce tus credenciales para acceder al panel.</p>
            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                  Recordarme
                </label>
                <a href="#" className="font-medium text-cyan-600 hover:text-cyan-700">¿Olvidaste tu contraseña?</a>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Entrar al panel
              </button>
            </form>
            <div className="mt-6 border-t border-slate-200 pt-5 text-center text-sm text-slate-600">
              ¿Nuevo en el instituto? <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-700">Regístrate</a>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Aulas virtuales", label: "Curso en vivo", desc: "Zoom, chat, y recursos integrados" },
            { title: "Certificados", label: "Reconocimiento", desc: "Diplomas descargables al finalizar" },
            { title: "Análisis", label: "Datos", desc: "Métricas de progreso en tiempo real" },
            { title: "Soporte 24/7", label: "Ayuda", desc: "Asistencia via chat y tickets" },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-white/15 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-100">{item.label}</p>
              <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/80">{item.desc}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
