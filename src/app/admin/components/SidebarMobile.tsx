"use client";
import { Fragment } from "react/jsx-runtime";
import { useSidebarStore } from "../store";
import useIsMobile from "../hooks/useIsMobile";
import { useEffect } from "react";

const SidebarMobile = () => {
  const { isSidebarShown, setIsSidebarShown } = useSidebarStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setIsSidebarShown(false);
    }
  }, [isMobile, setIsSidebarShown]);

  return (
    <Fragment>
      <div className="flex items-center gap-3.5 py-4 px-5 border-b border-solid border-line bg-[rgba(15,27,45,0.9)] backdrop-blur-sm sticky top-0 z-20 md:hidden">
        <button
          className="bg-surface-light border border-solid border-line rounded-sm w-9.5 h-8.5 flex items-center justify-center flex-col gap-1 cursor-pointer shrink-0"
          aria-label="Toggle navigation"
          onClick={() => setIsSidebarShown(true)}
        >
          <span className="w-4 h-0.5 bg-muted rounded-[1px]"></span>
          <span className="w-4 h-0.5 bg-muted rounded-[1px]"></span>
          <span className="w-4 h-0.5 bg-muted rounded-[1px]"></span>
        </button>
        <a
          href="powerpulse-admin.html"
          className="flex items-center gap-2.5 font-space-grotesk font-bold text-[18px] shrink-0 no-underline"
        >
          <span className="h-2.25 w-2.25 rounded-[50%] bg-accent shadow-[0_0_0_4px_rgba(255,182,39,0.14)] shrink-0"></span>
          PowerPulse
        </a>
      </div>
      <div
        className={`fixed inset-0 bg-[rgba(6,11,19,0.6)] z-25 ${isSidebarShown && isMobile ? "block" : "hidden"}`}
        onClick={() => setIsSidebarShown(false)}
      ></div>
    </Fragment>
  );
};

export default SidebarMobile;
