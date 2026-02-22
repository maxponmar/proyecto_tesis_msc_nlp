import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/lib/supabase/auth-actions";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4">
      <SidebarTrigger />
      <Image src="/retmeepro.svg" alt="RetmeePro" width={28} height={20} />
      <h1 className="text-lg font-semibold">RetmeePro</h1>
      <span className="text-sm text-muted-foreground">Mejorando el Texto</span>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{user?.email}</span>
        <form action={logout}>
          <Button variant="ghost" size="sm" type="submit">
            Cerrar Sesion
          </Button>
        </form>
      </div>
    </header>
  );
}
