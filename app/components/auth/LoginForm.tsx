'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DEMO_USERS,
  ROLE_LABEL,
  type UserRole,
  validateUser,
  toSessionUser,
} from '@/app/lib/auth';
import { getRoleDashboard, setAuthSession } from '@/app/lib/auth-client';

const ROLES: UserRole[] = ['student', 'teacher', 'admin'];

export default function LoginForm() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleDemo = useMemo(
    () => DEMO_USERS.find((user) => user.role === role),
    [role],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!identifier.trim() || !password) {
      setError('Please provide email/username and password.');
      return;
    }

    const user = validateUser(identifier, password, role);
    if (!user) {
      setError('Invalid credentials for selected role.');
      return;
    }

    setIsSubmitting(true);

    setAuthSession(toSessionUser(user));

    router.push(getRoleDashboard(user.role));
    router.refresh();
  };

  return (
    <div className="mx-auto w-full max-w-md surface-card p-8">
      <h2 className="text-2xl font-bold text-neutral-900">Login</h2>
      <p className="mt-2 text-sm text-neutral-600">Sign in as Student, Teacher, or Admin.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-700">Email / Username</span>
          <input
            type="text"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            className="form-control"
            placeholder="student@kidsschool.edu"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-700">Role</span>
          <select
            value={role}
            onChange={(event) => setRole(event.target.value as UserRole)}
            className="form-control"
          >
            {ROLES.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {ROLE_LABEL[roleOption]}
              </option>
            ))}
          </select>
        </label>

        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:opacity-60"
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <div className="surface-soft mt-6 p-4 text-xs text-neutral-700">
        <p className="font-semibold">Demo {ROLE_LABEL[role]} account</p>
        <p className="mt-1">Email: {roleDemo?.identifier}</p>
        <p>Password: {roleDemo?.password}</p>
      </div>

      <Link href="/" className="mt-5 inline-block text-sm font-semibold text-teal-700 hover:underline">
        Back to homepage
      </Link>
    </div>
  );
}
