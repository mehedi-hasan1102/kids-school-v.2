import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getDashboardPath, parseRole } from '@/app/lib/auth';

export default async function DashboardIndexPage() {
  const cookieStore = await cookies();
  const role = parseRole(cookieStore.get('school_role')?.value);

  if (!role) {
    redirect('/login');
  }

  redirect(getDashboardPath(role));
}
