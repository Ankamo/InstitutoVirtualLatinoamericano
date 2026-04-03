'use client';

export default function PanelInicioPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6">
      <header className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl bg-red-500 p-4 text-white shadow-md">
          <p className="text-3xl font-bold">1</p>
          <p className="text-sm">Estudiante</p>
        </article>
        <article className="rounded-xl bg-emerald-500 p-4 text-white shadow-md">
          <p className="text-3xl font-bold">1</p>
          <p className="text-sm">Padres</p>
        </article>
        <article className="rounded-xl bg-amber-400 p-4 text-white shadow-md">
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm">Docente</p>
        </article>
        <article className="rounded-xl bg-sky-700 p-4 text-white shadow-md">
          <p className="text-3xl font-bold">59</p>
          <p className="text-sm">Tema</p>
        </article>
      </header>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <article className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-2 font-semibold">Noticias</h2>
          <ul className="divide-y divide-slate-200 text-sm">
            <li className="py-2 flex items-center justify-between">
              <span>ENTREGA DE PLAN..</span>
              <span className="text-slate-500">EL DÍA 05/04/2026 DEBEN ESTAR PRESENTADAS LAS..</span>
              <span className="rounded bg-amber-400 px-2 py-0.5 text-xs font-semibold text-white">!</span>
            </li>
          </ul>
        </article>

        <article className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="mb-2 font-semibold">Estadísticas del sitio</h2>
          <div className="h-40 rounded border border-slate-200 bg-gradient-to-r from-sky-100 to-white p-2 text-sm text-slate-500">
            <p className="mb-1">Visitas</p>
            <p>28 Mar: 4, 3 Apr: 1</p>
          </div>
        </article>
      </section>

      <section className="mt-4 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-center text-xl font-semibold">2026 Resumen de Cuentas</h2>
        <p className="mb-2 text-center text-sm text-slate-500">Haga clic en ingresos mensuales o en la columna de gastos para ver el resumen del día.</p>
        <div className="h-72 rounded border border-slate-200 bg-white"></div>
      </section>

      <section className="mt-6 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-center text-xl font-semibold">Calendario</h2>
        <div className="overflow-hidden rounded border border-amber-400">
          <div className="bg-white p-3 text-center text-xl font-bold">abril 2026</div>
          <div className="grid grid-cols-7 border-y border-slate-100 text-center text-xs font-semibold text-slate-600">
            <div>lun.</div>
            <div>mar.</div>
            <div>mié.</div>
            <div>jue.</div>
            <div>vie.</div>
            <div>sáb.</div>
            <div>dom.</div>
          </div>
          <div className="grid grid-cols-7 divide-x divide-slate-100 text-center text-sm">
            {Array.from({ length: 35 }).map((_, index) => (
              <div key={index} className="h-20 p-1 text-slate-700">{index > 0 && index < 32 ? index : ''}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
