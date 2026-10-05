export const MUNI_VIEWPORT_HEIGHT = 380;

/** Height needed to give every bar ~26px of comfortable spacing. */
export function getMuniChartHeight(barangayCount: number): number {
  return Math.max(220, barangayCount * 26 + 40);
}

/** Whether a chart of this height needs the scrollable viewport + fade. */
export function needsScroll(barangayCount: number): boolean {
  return getMuniChartHeight(barangayCount) > MUNI_VIEWPORT_HEIGHT;
}
