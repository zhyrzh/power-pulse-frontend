import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import { getMuniChartHeight, needsScroll } from "../helpers";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type TBarData = {
  cityMunicipality: string;
  psgc: string;
  brgys: {
    name: string;
    psgc: string;
    outageCount: number;
    backgroundColor: string;
    alias?: string[];
  }[];
  brgyAliasInfo?: { psgc: string; brgy: string; alias: string[] }[];
};

type BarChartProps = {
  municipalityCityName: string;
  //   labels: string[];
  //   series: BarSeries[];
  dataRaw: TBarData;
  /** 'vertical' = Chart.js indexAxis 'x', 'horizontal' = indexAxis 'y' */
  orientation?: "vertical" | "horizontal";
  height?: number;
  showLegend?: boolean;
};

const OutageByMunicipalityBarangay = ({
  municipalityCityName,
  dataRaw,
  height = 380,
  showLegend = false,
  orientation = "horizontal",
}: BarChartProps) => {
  const barData = useMemo(
    () => ({
      labels: dataRaw.brgys.map((b) => b.name),
      datasets: [
        {
          label: "outage count",
          data: dataRaw.brgys.map((b) => b.outageCount),
          backgroundColor: dataRaw.brgys.map((b) => b.backgroundColor),
        },
      ],
    }),
    [dataRaw],
  );

  const options: ChartOptions<"bar"> = useMemo(
    () => ({
      indexAxis: orientation === "horizontal" ? "y" : "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: showLegend,
          position: "bottom",
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            font: { size: 12 },
          },
        },
        tooltip: {
          backgroundColor: "#1C2E4A",
          borderColor: "#263C58",
          borderWidth: 1,
          padding: 10,
        },
      },
      scales: {
        x: {
          grid: {
            display: orientation === "horizontal",
            color: "#1C2E4A",
          },
          ticks: { color: "#90A3BD", font: { size: 11.5 } },
        },
        y: {
          grid: { display: orientation === "vertical", color: "#1C2E4A" },
          beginAtZero: true,
          ticks: { color: "#90A3BD", font: { size: 11.5 }, precision: 0 },
        },
      },
    }),
    [orientation, showLegend],
  );

  const chartHeight = getMuniChartHeight(dataRaw.brgys.length);
  const scrollable = needsScroll(dataRaw.brgys.length);

  return (
    <div className="bg-surface border border-solid border-line rounded-lg px-5 pt-5 pb-4">
      <div className="flex items-start justify-between gap-2.5 mb-3.5">
        <div>
          <h3 className="text-[15.5px] mb-0.75">{municipalityCityName}</h3>
          <div className="text-faint text-xs">
            {dataRaw.brgys.length} barangays monitored
          </div>
        </div>
        <div className="font-space-grotesk font-semibold text-[18px] text-accent shrink-0">
          {dataRaw.brgys.reduce((p, b) => p + b.outageCount, 0)}
        </div>
      </div>
      <div
        className={`relative w-full min-w-0 overflow-hidden overflow-y-auto overflow-x-hidden ${scrollable ? "[-webkit-mask-image:linear-gradient(to_bottom,#000_calc(100%-20px),transparent_100%)] mask-[linear-gradient(to_bottom,#000_calc(100%-20px),transparent_100%)]" : ""}`}
        style={{
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
          ...(scrollable
            ? {
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 20px), transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 20px), transparent 100%)",
              }
            : {}),
        }}
      >
        <div
          className="relative w-full min-w-0 overflow-hidden"
          style={{ height }}
        >
          <Bar data={barData} options={options} height={chartHeight} />
        </div>
      </div>
    </div>
  );
};

export default OutageByMunicipalityBarangay;
