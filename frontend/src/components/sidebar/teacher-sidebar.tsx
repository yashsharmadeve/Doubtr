'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Video, History, User, GraduationCap, Inbox, Wallet } from 'lucide-react';
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
import BrandLogo from '../../assets/brand-logo';

const items = [
  { title: 'Dashboard', url: '/dashboard/teacher', icon: LayoutDashboard },
  { title: 'Doubt Requests', url: '/dashboard/teacher/requests', icon: Inbox },
  { title: 'Live Session', url: '/dashboard/teacher/session/active', icon: Video },
  { title: 'History', url: '/dashboard/teacher/history', icon: History },
  { title: 'Earnings', url: '/dashboard/teacher/earnings', icon: Wallet },
  { title: 'Profile', url: '/dashboard/teacher/profile', icon: User },
];

export function TeacherSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (!pathname) return false;
    if (url.includes('/session/')) return pathname.startsWith('/dashboard/teacher/session');
    return pathname === url;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-5">
        <BrandLogo
          icon={<GraduationCap className="w-4 h-4" />}
          iconWrapperClassName="w-8 h-8 rounded-lg bg-gradient-primary text-primary-foreground"
          textClassName="font-bold text-lg leading-6"
          className="font-bold text-lg"
          subTitle="Teacher"
          href="/dashboard/teacher"
          state={collapsed ? 'collapsed' : 'expanded'}
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
                <div className="text-sm font-medium truncate">Priya Nair</div>
                <div className="text-xs text-muted-foreground truncate">Mathematics · 8 yrs</div>
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
