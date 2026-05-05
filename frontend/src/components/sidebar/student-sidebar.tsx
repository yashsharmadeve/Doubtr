'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Search, Video, History, User, GraduationCap } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import BrandLogo from '../brand-logo';

const items = [
  { title: 'Dashboard', url: '/student/dashboard', icon: LayoutDashboard },
  { title: 'Find Teacher', url: '/student/find-teacher', icon: Search },
  { title: 'Live Session', url: '/student/session/active', icon: Video },
  { title: 'History', url: '/student/history', icon: History },
  { title: 'Profile', url: '/student/profile', icon: User },
];

export function StudentSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (!pathname) return false;
    if (url.includes('/session/')) return pathname.startsWith('/student/session');
    return pathname === url;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-5">
        <BrandLogo
          icon={<GraduationCap className="w-4 h-4" />}
          iconWrapperClassName="w-8 h-8 rounded-lg bg-gradient-primary text-primary-foreground"
          textClassName="font-bold text-lg"
          className="font-bold text-lg"
          href="/student/dashboard"
        />
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-[11px] tracking-widest uppercase">
              Workspace
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className="h-10 rounded-lg data-[active=true]:bg-gradient-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-soft"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4.5 w-4.5" />
                      {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {!collapsed ? (
          <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-3">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground text-sm font-semibold">
                A
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">Aarav Sharma</div>
                <div className="text-xs text-muted-foreground truncate">Class 10 · CBSE</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-9 w-9 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground text-sm font-semibold">
            A
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
