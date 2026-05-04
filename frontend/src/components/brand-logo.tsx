import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  title?: string;
  icon: ReactNode;
  className?: string;
  iconWrapperClassName?: string;
  textClassName?: string;
};

export default function BrandLogo({
  href = "/",
  title = "Doubtr",
  icon,
  className,
  iconWrapperClassName,
  textClassName,
}: BrandLogoProps) {
  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      <span className={cn("grid place-items-center", iconWrapperClassName)}>
        {icon}
      </span>
      <span className={cn("font-semibold text-lg tracking-tight", textClassName)}>{title}</span>
    </Link>
  );
}
