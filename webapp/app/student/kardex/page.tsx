export default function StudentKardexPage() {
  const records = [
    {
      id: 1,
      matricula: 'Gestión 2025 - SECUNDARIA - 1ro Secundaria - A',
      docente: 'Fernández María',
      materia: 'LENGUA CASTELLANA Y ORIGINARIA',
    },
    { id: 2, matricula: 'Gestión 2025 - SECUNDARIA - 1ro Secundaria - A', docente: 'Ríos Carlos', materia: 'MATEMÁTICA' },
    { id: 3, matricula: 'Gestión 2025 - SECUNDARIA - 1ro Secundaria - A', docente: 'Ríos Carlos', materia: 'QUÍMICA' },
    { id: 4, matricula: 'Gestión 2025 - SECUNDARIA - 1ro Secundaria - A', docente: 'Herrera Daniel', materia: 'FÍSICA' },
    { id: 5, matricula: 'Gestión 2025 - PRIMARIA - 1ro Primaria - A', docente: 'Fernández María', materia: 'COMPUTACIÓN' },
    { id: 6, matricula: 'Gestión 2025 - PRIMARIA - 1ro Primaria - A', docente: 'Ríos Carlos', materia: 'CIENCIAS SOCIALES' },
  ];

  const groupedByMatricula = records.reduce((acc, item) => {
    if (!acc[item.matricula]) {
      acc[item.matricula] = [];
    }
    acc[item.matricula].push(item);
    return acc;
  }, {} as Record<string, typeof records>);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f3f4f6_60%)] text-slate-900">
      <div className="border-b border-slate-200 bg-white px-4 py-2 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button className="text-slate-700 hover:text-slate-900">☰</button>
          <span className="text-sm font-medium text-slate-500">Mateo Castro Roca</span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <header className="mb-6 border-b border-slate-300 pb-4">
          <h1 className="text-3xl font-bold">Reporte de kardex del estudiante: Castro Roca Mateo</h1>
        </header>

        {Object.entries(groupedByMatricula).map(([matricula, items]) => (
          <section key={matricula} className="mb-6 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
            <header className="bg-emerald-300 px-5 py-3">
              <h2 className="text-lg font-bold text-sky-800">Matricula: {matricula}</h2>
            </header>
            <div className="p-5">
              <h3 className="mb-3 text-lg font-semibold">Materias asignadas</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-white text-left text-base font-bold text-slate-800">
                    <tr>
                      <th className="border border-slate-300 px-4 py-2">Nro</th>
                      <th className="border border-slate-300 px-4 py-2">Docente</th>
                      <th className="border border-slate-300 px-4 py-2">Materia</th>
                      <th className="border border-slate-300 px-4 py-2">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={item.id} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="border border-slate-300 px-4 py-2 text-center">{index + 1}</td>
                        <td className="border border-slate-300 px-4 py-2">{item.docente}</td>
                        <td className="border border-slate-300 px-4 py-2">{item.materia}</td>
                        <td className="border border-slate-300 px-4 py-2">
                          <button className="rounded bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-600">
                            📋 Ver reporte de kardex
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
