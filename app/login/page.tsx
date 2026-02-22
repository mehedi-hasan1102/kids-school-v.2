import type { Metadata } from 'next';
import LoginForm from '@/app/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Kids School',
  description: 'Role-based login for students, teachers, and administrators.',
};

export default function LoginPage() {
  return (
    <div className="page-wrap py-16">
      <div className="mb-8 text-center">
        <p className="eyebrow">Portal Login</p>
        <h1 className="page-title">Access Your Dashboard</h1>
        <p className="mx-auto page-copy">
          Sign in with your role-specific account. Students, Teachers, and Admin users are redirected to their
          respective dashboards.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
