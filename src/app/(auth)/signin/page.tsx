import 'server-only';
import { SignInPage } from './SignInPage';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/server/supabase';

export default async function AuthPage() {
  const session = await getSession();
  if (session) {
    redirect('/');
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignInPage />
      </div>
    </div>

  );
}
