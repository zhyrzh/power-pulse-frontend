"use client";
import { Fragment } from "react/jsx-runtime";
import SidebarNavItem from "./SidebarNavItem";
import { useSidebarStore } from "../store";
import useIsMobile from "../hooks/useIsMobile";

const Sidebar = () => {
  const NAV_ITEMS = [
    {
      href: "/admin/dashboard",
      name: "Dashboard",
    },
    {
      href: "/admin/manage",
      name: "Manage",
    },
  ];

  const sidebarStore = useSidebarStore();
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <aside
        className={`fixed top-0 left-0 bottom-0 -translate-x-full transition-transform shadow-[4px_0_24px_rgba(0,0,0,0.35)] md:translate-x-0 md:w-63 md:shrink-0 md:bg-surface md:border-r md:border-solid md:border-line md:flex md:flex-col md:sticky md:top-0 md:h-dvh md:z-30 ${sidebarStore.isSidebarShown || !isMobile ? "translate-x-0 w-63 shrink-0 bg-surface border-r border-solid border-line flex flex-col sticky top-0 h-dvh z-30" : "-translate-x-full"}`}
        id="sidebar"
      >
        <div className="py-5.5 px-5 border-t border-solid border-line shrink-0">
          <a
            href="powerpulse-admin.html"
            className="flex items-center gap-2.5 font-space-grotesk font-bold text-[18px] shrink-0 no-underline"
          >
            <span className="h-2.25 w-2.25 rounded-[50%] bg-accent shadow-[0_0_0_4px_rgba(255,182,39,0.14)] shrink-0"></span>
            PowerPulse
            <span className="font-ibm-plex font-semibold text-xs text-faint border border-solid border-line rounded-[3px] py-0.5 px-1.75 ml-1">
              Admin
            </span>
          </a>
        </div>

        <nav className="flex flex-col flex-1 overflow-y-auto py-3.5 px-3 gap-0.5">
          {NAV_ITEMS.map((i) => (
            <SidebarNavItem key={i.href} href={i.href} name={i.name} />
          ))}
        </nav>

        <div className="flex items-center gap-2.5 py-4 px-5 border-t border-solid border-line shrink-0">
          <div className="w-8 h-8 rounded-full bg-surface-light border border-solid border-line flex items-center justify-center font-space-grotesk font-semibold text-xs text-accent shrink-0">
            JR
          </div>
          <div className="min-w-0 ">
            <div className="text-[13.5px] text-light font-medium">J. Reyes</div>
            <div className="text-sm text-light">Administrator</div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
