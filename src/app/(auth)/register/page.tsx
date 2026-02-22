"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sileo } from "sileo";
import { register } from "@/lib/supabase/auth-actions";
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

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirm = formData.get("confirmPassword") as string;

    if (password !== confirm) {
      setError("Las contrasenas no coinciden");
      sileo.warning({ title: "Las contraseñas no coinciden", fill: "#fbb615" });
      return;
    }
    if (password.length < 8) {
      setError("La contrasena debe tener al menos 8 caracteres");
      sileo.warning({ title: "La contraseña debe tener al menos 8 caracteres", fill: "#fbb615" });
      return;
    }

    setLoading(true);
    setError(null);
    const loadingId = sileo.info({ title: "Creando cuenta...", fill: "#272362", duration: 3000 });
    const result = await register(formData);
    if (result?.error) {
      sileo.dismiss(loadingId);
      setError(result.error);
      sileo.error({ title: "Error al registrarse", description: result.error, fill: "#ed1c80" });
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <Image src="/retmeepro.svg" alt="RetmeePro" width={120} height={88} />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Crear Cuenta</CardTitle>
          <CardDescription>
            Completa los campos para registrarte
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input id="fullName" name="fullName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electronico</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contrasena</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contrasena</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-2">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Cargando..." : "Registrarse"}
            </Button>
            <p className="text-sm text-muted-foreground">
              Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary underline">
                Inicia Sesion
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
