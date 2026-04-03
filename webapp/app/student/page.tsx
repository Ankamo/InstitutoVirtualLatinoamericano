'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Materia {
  nro: number;
  docente: string;
  materia: string;
}

interface Matricula {
  id: string;
  nivel: string;
  curso: string;
  items: Materia[];
}

const sidebarLinks = [
  { label: 'Inicio', icon: '🏠', href: '/inicio' },
  { label: 'Estudiante', icon: '👩‍🎓', href: '/student' },
  { label: 'Padres', icon: '👪', href: '#' },
  { label: 'Docente', icon: '👨‍🏫', href: '#' },
  { label: 'Usuario', icon: '👤', href: '#' },
  { label: 'Académico', icon: '🎓', href: '#' },
  { label: 'Asistencia', icon: '🗓️', href: '#' },
  { label: 'Examen', icon: '📝', href: '#' },
  { label: 'Calificación', icon: '⭐', href: '#' },
  { label: 'Conversación', icon: '💬', href: '#' },
  { label: 'Compartir', icon: '🔗', href: '#' },
  { label: 'Correo', icon: '✉️', href: '#' },
  { label: 'Biblioteca', icon: '📚', href: '#' },
  { label: 'Transporte', icon: '🚍', href: '#' },
  { label: 'Hospedaje', icon: '🛏️', href: '#' },
  { label: 'Cuenta', icon: '⚙️', href: '#' },
  { label: 'Anuncio', icon: '📢', href: '#' },
  { label: 'Informe', icon: '📊', href: '#' },
  { label: 'Administrador', icon: '👑', href: '#' },
  { label: 'Ajustes Generales', icon: '🛠️', href: '#' },
];

const matriculas: Matricula[] = [
  {
    id: '2025-secundaria',
    nivel: 'Gestión 2025 - SECUNDARIA - 1ro Secundaria - A',
    curso: 'Secundaria',
    items: [
      { nro: 1, docente: 'Fernández María', materia: 'LENGUA CASTELLANA Y ORIGINARIA' },
      { nro: 2, docente: 'Ríos Carlos', materia: 'MATEMÁTICA' },
      { nro: 3, docente: 'Ríos Carlos', materia: 'QUÍMICA' },
      { nro: 4, docente: 'Herrera Daniel', materia: 'FÍSICA' },
    ],
  },
  {
    id: '2025-primaria',
    nivel: 'Gestión 2025 - PRIMARIA - 1ro Primaria - A',
    curso: 'Primaria',
    items: [
      { nro: 5, docente: 'Fernández María', materia: 'COMPUTACIÓN' },
      { nro: 6, docente: 'Ríos Carlos', materia: 'CIENCIAS SOCIALES' },
    ],
  },
];

export default function StudentPanel() {
  const [activeTab, setActiveTab] = useState<'asistencias' | 'calificaciones' | 'kardex'>('asistencias');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();

  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);

  const goLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      {sidebarOpen && (
        <button className="fixed inset-0 z-20 bg-black/40" aria-label="Cerrar overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 transform bg-slate-900 text-slate-100 shadow-xl transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-700 p-1">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
              alt="Perfil del usuario"
              className="h-7 w-7 rounded-full object-cover border border-slate-400"
            />
            <span className="text-xs font-semibold">ADMINISTRADOR</span>
          </div>
          <button className="rounded-md bg-slate-700 px-1 py-0.5 text-xs font-semibold hover:bg-slate-600" aria-label="Cerrar sidebar" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="overflow-y-auto p-4">
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 rounded-sm px-1 py-0.5 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-3 sm:p-4">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl text-slate-700 hover:bg-slate-200"
              aria-label="Abrir menú"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className="text-lg font-bold text-slate-800">IPEM 254</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600">Español</span>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg text-slate-700 hover:bg-slate-200" aria-label="Notificaciones">
              🔔
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg text-slate-700 hover:bg-slate-200" aria-label="Año escolar">
              📅
            </button>
            <div className="relative">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm"
                onClick={toggleUserMenu}
                aria-label="Abrir menú de usuario"
              >
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
                  alt="Usuario"
                  className="h-9 w-9 rounded-full object-cover"
                />
              </button>
              <div
                className={`absolute right-0 z-40 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg transition-all ${
                  userMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <button className="block w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Perfil</button>
                <button className="block w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Contraseña</button>
                <button onClick={goLogout} className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">Cerrar sesión</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-4 max-w-7xl p-4 sm:p-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800">Asistencias del estudiante: Castro Roca Mateo</h2>
          <p className="mt-1 text-sm text-slate-500">Accede a los módulos principales debajo.</p>

          <nav className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('asistencias')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeTab === 'asistencias' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Asistencias
            </button>
            <button
              onClick={() => setActiveTab('calificaciones')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeTab === 'calificaciones' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Calificaciones
            </button>
            <button
              onClick={() => setActiveTab('kardex')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeTab === 'kardex' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Kardex
            </button>
          </nav>

          <div className="mt-6">
            {activeTab === 'asistencias' && (
              <div className="space-y-4">
                {matriculas.map((matricula) => (
                  <article key={matricula.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-base font-semibold text-slate-700">{matricula.nivel}</h3>
                    <div className="mt-2 overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
                          <tr>
                            <th className="px-3 py-2">Nro</th>
                            <th className="px-3 py-2">Docente</th>
                            <th className="px-3 py-2">Materia</th>
                            <th className="px-3 py-2">Acciones</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {matricula.items.map((item) => (
                            <tr key={item.nro}>
                              <td className="px-3 py-2">{item.nro}</td>
                              <td className="px-3 py-2">{item.docente}</td>
                              <td className="px-3 py-2">{item.materia}</td>
                              <td className="px-3 py-2">
                                <button className="rounded bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-700">Ver asistencia</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'calificaciones' && (
              <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold">Calificaciones</h3>
                <p className="mt-1 text-sm text-slate-600">Contenido de calificaciones disponible pronto.</p>
              </article>
            )}

            {activeTab === 'kardex' && (
              <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold">Kardex académico</h3>
                <p className="mt-1 text-sm text-slate-600">Contenido de kardex disponible pronto.</p>
              </article>
            )}
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={goLogout}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              🚪 Cerrar sesión
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
