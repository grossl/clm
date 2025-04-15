import 'server-only';
import { getSession } from "@/lib/server/supabase";
import { redirect } from 'next/navigation';

export default async function Page() {

  const session = await getSession();
  const isSessionAvailable = session !== null;

  if (!isSessionAvailable) {
    redirect('/signin');
  }

  return (
    <div></div>
  );
}
