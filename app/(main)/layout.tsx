import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { Button } from "@/src/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  if (!session || !session.user) return redirect("/auth/login");

  return (
    <section>
      <div className="flex w-full">
        <Header user={session.user} />
        {session.user && (
          <Button onClick={async () => await signOut()}>Déconnexion</Button>
        )}
      </div>
      {children}
      <Footer />
    </section>
  );
}
