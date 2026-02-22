import Image from "next/image";
import { Mail, Globe, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
  website?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Samuel González López",
    role: "Director del Proyecto",
    image: "/SamuelGonzalezLopez-Profile.jpeg",
    email: "samuelgonzalezlopez@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/samuel-gonz%C3%A1lez-l%C3%B3pez-56517410/",
    website: "https://samuelgonzalez-lopez.com/",
  },
  {
    name: "Maximiliano Ponce Marquez",
    role: "Desarrollador, Aportador",
    image: "/maximilianoponceprofile.jpeg",
    email: "contacto@maximilianoponce.com",
    linkedin: "https://www.linkedin.com/in/maximilianoponcemarquez/",
    website: "https://maximilianoponce.com/",
  },
  {
    name: "Daniel Alfredo Hernández Carrasco",
    role: "Desarrollador, Aportador — Turet 2.0",
    image: "/danielcarrascoprofile.jpg",
    linkedin: "https://www.linkedin.com/in/daniel-carrasco-a402aab9/",
  },
  {
    name: "Jesús Carlos Cárdenas Piñuelas",
    role: "Desarrollador, Aportador — Turet 1.0",
    image: "/jesuscarlosprofile.jpg",
    linkedin: "https://www.linkedin.com/in/jccp33/",
  },
  {
    name: "Erwing Alexander Vilegas Tun",
    role: "Desarrollador, Aportador — Turet 1.0",
    image: "/erwinprofile.jpg",
    linkedin:
      "https://www.linkedin.com/in/erwin-alexander-villegas-tun-04a347148/",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="group w-full overflow-hidden transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background">
          <Image
            src={member.image}
            alt={`Perfil de ${member.name}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="font-semibold leading-tight">{member.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
          {member.email && (
            <p className="mt-1 text-xs text-muted-foreground">{member.email}</p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {member.email && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={`mailto:${member.email}?subject=RetmeePro`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="size-4" />
                Correo
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          )}
          {member.website && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
                Web
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="flex items-center gap-4">
        <Image src="/retmeepro.svg" alt="RetmeePro" width={48} height={35} />
        <div>
          <h1 className="text-2xl font-bold">Acerca de RetmeePro</h1>
          <p className="text-muted-foreground">
            Plataforma de análisis de texto NLP para escritura académica en
            español
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Equipo</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
