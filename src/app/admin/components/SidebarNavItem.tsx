"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavItem = ({ href, name }: { href: string; name: string }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center no-underline text-[14.5px] py-2.5 px-3.5 rounded-sm border-l border-solid transition-[color_0.15s_ease,background_0.15s_ease,border-color_0.15s_ease] hover:text-light hover:bg-surface-light ${href === pathName ? "text-light bg-surface-light border-accent" : "text-muted bg-transparent border-transparent"}`}
    >
      {name}
    </Link>
  );
};

export default SidebarNavItem;
