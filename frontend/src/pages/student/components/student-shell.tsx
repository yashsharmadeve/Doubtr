'use client';

import { Bell, Search } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { StudentSidebar } from "@/components/sidebar/student-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type StudentShellProps = {
  children: React.ReactNode;
};

export default function StudentShell({ children }: StudentShellProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <StudentSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center gap-3 border-b border-border bg-background/80 backdrop-blur-md px-4 sticky top-0 z-30">
            <SidebarTrigger className="text-foreground" />
            <div className="hidden md:flex items-center flex-1 max-w-md ml-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search teachers, subjects, topics..."
                  className="pl-9 h-10 bg-muted/50 border-transparent focus-visible:bg-background"
                />
              </div>
            </div>
            <div className="flex-1 md:hidden" />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-4.5 w-4.5" />
            </Button>
          </header>

          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
