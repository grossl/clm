import 'server-only';
import Home from "@/app/home";
import { getSession } from "@/lib/server/supabase";
import { redirect } from 'next/navigation';

export default async function Page() {

  const session = await getSession();
  const isSessionAvailable = session !== null;

  if (!isSessionAvailable) {
    redirect('/signin');
  }

  return (
    <Home />
  );
}
