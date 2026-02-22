"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sileo } from "sileo";
import { login } from "@/lib/supabase/auth-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const loadingId = sileo.info({ title: "Iniciando sesión..." });
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    if (result?.error) {
      sileo.dismiss(loadingId);
      setError(result.error);
      sileo.error({ title: "Error al iniciar sesión", description: result.error });
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <Image src="/retmeepro.svg" alt="RetmeePro" width={120} height={88} />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar Sesion</CardTitle>
          <CardDescription>
            Ingresa tu correo electronico y contrasena
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="space-y-2">
              <Label htmlFor="email">Correo electronico</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contrasena</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar Sesion"}
            </Button>
            <p className="text-sm text-muted-foreground">
              No tienes una cuenta?{" "}
              <Link href="/register" className="text-primary underline">
                Registrate
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
