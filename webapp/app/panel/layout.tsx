'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = { children: React.ReactNode };

const sidebarLinks = [
  { label: 'Inicio', icon: '🏠', href: '/panel/inicio' },
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

export default function PanelLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          aria-label="Cerrar overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 overflow-y-auto bg-slate-900 text-slate-100 shadow-xl transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
              alt="Perfil del usuario"
              className="h-7 w-7 rounded-full border border-slate-400 object-cover"
            />
            <span className="text-xs font-semibold">ADMINISTRADOR</span>
          </div>
          <button
            className="rounded-md bg-slate-700 px-1 py-0.5 text-xs font-semibold hover:bg-slate-600"
            aria-label="Cerrar sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-3 sm:p-4">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl text-slate-700 hover:bg-slate-200 lg:hidden"
              aria-label="Abrir menú"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className="text-lg font-bold text-slate-800">Panel</h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span>Español</span>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200" aria-label="Notificaciones">🔔</button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200" aria-label="Año escolar">📅</button>

            <div className="relative">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm"
                onClick={() => setUserMenuOpen((prev) => !prev)}
                aria-label="Abrir menú de usuario"
              >
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
                  alt="Usuario"
                  className="h-9 w-9 rounded-full object-cover"
                />
              </button>
              <div className={`absolute right-0 z-40 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg ${userMenuOpen ? 'block' : 'hidden'}`}>
                <button className="block w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Perfil</button>
                <button className="block w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Contraseña</button>
                <button onClick={logout} className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">Cerrar sesión</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-0">
        <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:pl-72">{children}</div>
      </main>
    </div>
  );
}
