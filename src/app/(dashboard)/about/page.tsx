import Image from "next/image";
import { Mail, Globe, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
    image: "/MaximilianoPonceMarquez-Profile.jpeg",
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
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center text-center">
        <Image
          src={member.image}
          alt={`Perfil de ${member.name}`}
          width={96}
          height={96}
          className="rounded-full shadow-md"
        />
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.role}</p>
        {member.email && (
          <p className="text-sm text-muted-foreground">{member.email}</p>
        )}
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-center gap-2">
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
            <a href={member.website} target="_blank" rel="noopener noreferrer">
              <Globe className="size-4" />
              Web
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Image
          src="/retmeepro.svg"
          alt="RetmeePro"
          width={48}
          height={35}
        />
        <div>
          <h1 className="text-2xl font-bold">RetmeePro</h1>
          <p className="text-muted-foreground">
            Plataforma de análisis de texto NLP para escritura académica en
            español
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-6">
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
