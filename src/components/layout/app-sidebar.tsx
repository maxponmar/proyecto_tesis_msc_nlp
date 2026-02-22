"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  FileText,
  Target,
  Languages,
  Clock,
  ClipboardList,
  Users,
} from "lucide-react";

const menuItems = [
  { title: "Editor", href: "/editor", icon: FileText },
  { title: "Objetivos", href: "/objectives", icon: Target },
  { title: "FreeLing", href: "/freeling", icon: Languages },
  { title: "Historial", href: "/history", icon: Clock },
  { title: "Encuesta", href: "/survey", icon: ClipboardList },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-3">
        <Link href="/editor" className="flex items-center gap-2">
          <Image src="/retmeepro.svg" alt="RetmeePro" width={32} height={24} />
          <span className="text-lg font-semibold">RetmeePro</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Analisis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/about"}>
              <Link href="/about">
                <Users />
                <span>Acerca de</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
