import { useSyncExternalStore } from "react";

const useIsMobile = () => {
  // 1. Subscribe function: attaches the listener and returns the cleanup
  const subscribe = (callback: (e: Event) => void) => {
    const mediaQuery = window.matchMedia(`(max-width: 53.75rem)`);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  // 2. Snapshot function: reads the current value
  const getSnapshot = () => window.matchMedia(`(max-width: 53.75rem)`).matches;

  // 3. Server fallback (optional, prevents SSR crashes)
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useIsMobile;
