import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center border-b px-6">
        <span className="text-lg font-bold">RetmeePro</span>
        <nav className="ml-auto flex gap-2">
          {user ? (
            <Button asChild>
              <Link href="/editor">Ir al Editor</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Iniciar Sesion</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </>
          )}
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            RetmeePro
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Mejorando el Texto — Plataforma de analisis NLP para escritura academica
          </p>
        </div>

        <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Riqueza Lexica</CardTitle>
              <CardDescription>
                Analiza variedad, densidad y sofisticacion de tu texto
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Objetivos Academicos</CardTitle>
              <CardDescription>
                Descompone objetivos en Que, Como y Para Que
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analisis Linguistico</CardTitle>
              <CardDescription>
                Etiquetado POS, lematizacion y analisis morfologico con FreeLing
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Button size="lg" asChild>
          <Link href={user ? "/editor" : "/register"}>
            Comenzar Ahora
          </Link>
        </Button>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        RetmeePro — Maximiliano Ponce Marquez
      </footer>
    </div>
  );
}
