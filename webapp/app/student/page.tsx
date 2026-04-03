'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentPanel() {
  const [activeTab, setActiveTab] = useState('asistencias');
  const router = useRouter();

  const tabs = [
    { id: 'asistencias', label: 'Asistencias', icon: '📅' },
    { id: 'calificaciones', label: 'Calificaciones', icon: '📊' },
    { id: 'kardex', label: 'Kardex', icon: '📄' },
  ];

  const goLogout = () => {
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="flex min-h-screen flex-col justify-between border-r border-slate-200 bg-white px-4 py-6 shadow-sm">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800">Panel de Estudiante</h2>
              <p className="text-sm text-slate-500">Castro Roca Mateo</p>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-4">
            <button
              onClick={goLogout}
              className="flex w-full items-center justify-center rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              🚪 Cerrar sesión
            </button>
          </div>
        </aside>

        <section className="p-6">
          <header className="mb-6 border-b border-slate-300 pb-4">
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Estudiante</h1>
            <p className="text-sm text-slate-500">Navega por los módulos del sistema.</p>
          </header>

          <div className="rounded-xl bg-white p-6 shadow">
            {activeTab === 'asistencias' && <AttendanceModule />}
            {activeTab === 'calificaciones' && <GradesModule />}
            {activeTab === 'kardex' && (
              <div className="space-y-3">
                <p className="text-sm text-slate-600">
                  Esta es la página de Kardex. También puedes ir a la ruta{' '}
                  <code className="rounded bg-slate-100 px-1 py-0.5">/student/kardex</code> para ver el reporte completo.
                </p>
                <KardexModule />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function AttendanceModule() {
  const [subjectFilter, setSubjectFilter] = useState('');

  const attendanceData = [
    {
      date: '2024-01-15',
      subject: 'Matemáticas',
      teacher: 'Fernández María',
      criteria: 'Asistencia regular',
      note: 'Excelente',
      status: 'Presente',
    },
    {
      date: '2024-01-16',
      subject: 'Física',
      teacher: 'Ríos Carlos',
      criteria: 'Faltas',
      note: 'Justificada',
      status: 'Ausente',
    },
    {
      date: '2024-01-17',
      subject: 'Química',
      teacher: 'Ríos Carlos',
      criteria: 'Asistencia regular',
      note: 'Puntual',
      status: 'Presente',
    },
    {
      date: '2024-01-18',
      subject: 'Historia',
      teacher: 'Herrera Daniel',
      criteria: 'Asistencia regular',
      note: 'Muy participativo',
      status: 'Presente',
    },
  ];

  const mirrors = [...new Set(attendanceData.map((d) => d.subject))];
  const filtered = subjectFilter
    ? attendanceData.filter((item) => item.subject === subjectFilter)
    : attendanceData;

  return (
    <section>
      <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Registro de Asistencias</h2>
        <div className="flex items-center gap-3">
          <label htmlFor="subjectFilter" className="text-sm font-medium text-gray-600">
            Filtrar por materia:
          </label>
          <select
            id="subjectFilter"
            value={subjectFilter}
            onChange={(event) => setSubjectFilter(event.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200"
          >
            <option value="">Todas</option>
            {mirrors.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Materia</th>
              <th className="px-4 py-3 text-left">Docente</th>
              <th className="px-4 py-3 text-left">Fecha de asistencia</th>
              <th className="px-4 py-3 text-left">Criterio</th>
              <th className="px-4 py-3 text-left">Observación</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-sm text-gray-800">
            {filtered.map((record, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-4 py-3">{record.subject}</td>
                <td className="px-4 py-3">{record.teacher}</td>
                <td className="px-4 py-3">{record.date}</td>
                <td className="px-4 py-3">{record.criteria}</td>
                <td className="px-4 py-3">{record.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function GradesModule() {
  const gradesData = [
    { subject: 'Matemáticas', grade: 85, status: 'Aprobado' },
    { subject: 'Física', grade: 78, status: 'Aprobado' },
    { subject: 'Química', grade: 92, status: 'Aprobado' },
    { subject: 'Historia', grade: 88, status: 'Aprobado' },
  ];

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Calificaciones</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {gradesData.map((grade, index) => (
          <article key={index} className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-900">{grade.subject}</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">{grade.grade}/100</span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  grade.status === 'Aprobado'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {grade.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function KardexModule() {
  const kardexData = [
    { semester: '2023-1', subject: 'Matemáticas Básicas', grade: 85, credits: 3 },
    { semester: '2023-1', subject: 'Física General', grade: 78, credits: 4 },
    { semester: '2023-2', subject: 'Química Orgánica', grade: 92, credits: 3 },
    { semester: '2023-2', subject: 'Historia Universal', grade: 88, credits: 2 },
  ];

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Kardex Académico</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Semestre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Materia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Calificación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Créditos
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {kardexData.map((record, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{record.semester}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{record.subject}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{record.grade}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{record.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}