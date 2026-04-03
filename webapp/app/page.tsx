'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const users = [
  { username: 'estudiante1', password: 'pass1', role: 'estudiante', name: 'Estudiante Uno' },
  { username: 'estudiante2', password: 'pass2', role: 'estudiante', name: 'Estudiante Dos' },
  { username: 'docente', password: 'doc123', role: 'docente', name: 'Profesor Martínez' },
  { username: 'padre', password: 'padre123', role: 'padre', name: 'Padre de Familia' },
  { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrador' },
];

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
      setError('Credenciales incorrectas. Usa un usuario válido.');
      return;
    }

    setError('');
    localStorage.setItem('user', JSON.stringify(user));

    if (user.role === 'estudiante') router.push('/student');
    else router.push('/panel');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-600 to-violet-700 px-6 py-8 text-white">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="text-3xl font-bold">Iniciar sesión</h1>
        <p className="mt-2 text-sm">Ingresa con uno de los usuarios configurados.</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Usuario</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-3 py-2 text-black"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-3 py-2 text-black"
            />
          </label>

          {error && <p className="text-sm text-red-200">{error}</p>}

          <button type="submit" className="w-full rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-600">
            Entrar
          </button>
        </form>

        <div className="mt-6 rounded-xl bg-white/20 p-3 text-sm text-white">
          Usuarios disponibles:
          <ul className="mt-2 list-disc pl-5 text-white">
            {users.map((u) => (
              <li key={u.username}>
                {u.role.toUpperCase()} → <strong>{u.username}</strong> / {u.password}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
