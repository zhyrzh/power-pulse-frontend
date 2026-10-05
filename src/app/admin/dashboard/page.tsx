"use client";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { DUMMY_DATA_FOR_OUTAGE_WITH_OUTAGE_COUNT } from "../../../../dummy-data";
import OutageByMunicipalityBarangay from "./components/OutageByBarangay";

function Dashboard() {
  const [sample] = useState(DUMMY_DATA_FOR_OUTAGE_WITH_OUTAGE_COUNT);

  return (
    <Fragment>
      <main className="max-w-7xl mx-auto my-0 px-8 py-0 xl:max-w-360 xl:py-0 xl:px-10">
        <div className="pt-10 px-0 pb-7 flex items-end justify-between flex-wrap gap-5">
          <div>
            <h1 className="text-[clamp(24px,2.6vw,30px)] mb-1.5">Dashboard</h1>
            <p className="text-muted text-[14.5px]">
              Outage activity, alert delivery, and subscriber growth across all
              monitored locations.
            </p>
            <p className="text-faint text-[12.5px] mt-1.5">
              Sample data — last refreshed just now
            </p>
          </div>
          <div
            className="inline-flex bg-surface border border-s border-line rounded-[999px] p-0.75 shrink-0"
            id="periodToggle"
          >
            <button
              className="border-none text-[13.5px] font-medium py-2 px-4.5 rounded-[999px] cursor-pointer transition-[background_0.15s_ease,color_0.15s_ease] bg-accent text-[#1A1102]"
              data-period="monthly"
            >
              Monthly
            </button>
            <button
              className="border-none text-[13.5px] font-medium py-2 px-4.5 rounded-[999px] cursor-pointer transition-[background_0.15s_ease,color_0.15s_ease] bg-transparent text-muted"
              data-period="yearly"
            >
              Yearly
            </button>
          </div>
        </div>

        {/* <section className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Registered active users</div>
            <div className="kpi-value">8,412</div>
            <div className="kpi-delta up" id="usersDelta">
              +4.6% vs last month
            </div>
            <div className="spark-box">
              <canvas id="sparkUsers"></canvas>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label" id="notifLabel">
              Notifications sent this month
            </div>
            <div className="kpi-value" id="notifValue">
              15,204
            </div>
            <div className="kpi-delta up" id="notifDelta">
              +12.3% vs last month
            </div>
            <div className="spark-box">
              <canvas id="sparkNotif"></canvas>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label" id="outagesLabel">
              Outages logged this month
            </div>
            <div className="kpi-value" id="outagesValue">
              27
            </div>
            <div className="kpi-delta down" id="outagesDelta">
              -8.1% vs last month
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Locations monitored</div>
            <div className="kpi-value">6</div>
            <div className="kpi-delta">Unchanged</div>
          </div>
        </section> */}

        {/* <section className="charts-grid">
          <div className="card">
            <div className="card-head">
              <div>
                <h2>Outages by location</h2>
                <p id="outagesTrendSub">Monthly count, last 12 months</p>
              </div>
            </div>
            <div className="chart-box">
              <canvas id="outagesTrendChart"></canvas>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <div>
                <h2>Share of outages</h2>
                <p id="outagesShareSub">By location, this month</p>
              </div>
            </div>
            <div className="chart-box donut">
              <canvas id="outagesShareChart"></canvas>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "16px" }}>
          <div className="card">
            <div className="card-head">
              <div>
                <h2>Notifications sent</h2>
                <p id="notifTrendSub">Monthly total, last 12 months</p>
              </div>
            </div>
            <div className="chart-box">
              <canvas id="notifChart"></canvas>
            </div>
          </div>
        </section> */}

        <section style={{ marginBottom: "16px" }}>
          <div className="bg-surface border border-solid border-line rounded-lg pt-5.5 px-5.5 pb-4.5 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-4.5">
              <div>
                <h2 className="text-[16px] mb-1 ">Outages by barangay</h2>
                <p className="text-faint text-[12.5px]" id="muniSub">
                  Per municipality, this month
                </p>
              </div>
              <div className="flex center gap-2.5 flex-wrap shrink-0">
                <div
                  className="inline-flex bg-surface border border-solid border-line rounded-full p-0.75 shrink-0"
                  id="muniPeriodToggle"
                >
                  <button
                    className="border-none text-[13.5px] font-medium py-2 px-4.5 rounded-full cursor-pointer transition-all bg-accent text-[#1A1102]"
                    data-period="monthly"
                  >
                    Monthly
                  </button>
                  <button
                    className="border-none text-[13.5px] font-medium py-2 px-4.5 rounded-full cursor-pointer transition-all bg-transparent text-muted"
                    data-period="yearly"
                  >
                    Yearly
                  </button>
                </div>
                <select
                  className="bg-surface-light border border-solid border-line text-light rounded-sm py-2 px-3 text-[13px] outline-none cursor-pointer transition-colors focus:border-accent"
                  id="muniMonthSelect"
                >
                  <option value="">Sept 2026</option>
                </select>
              </div>
            </div>
            <div
              className="grid grid-cols-1 gap-4 min-w-0 lg:grid-cols-2"
              id="muniGrid"
            >
              {sample.map((s) => (
                <OutageByMunicipalityBarangay
                  key={s.cityMunicipality}
                  dataRaw={s}
                  municipalityCityName={s.cityMunicipality}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="table-card">
          <div className="card">
            <div className="card-head">
              <div>
                <h2>Recent outage log</h2>
                <p>Latest reported interruptions across all locations</p>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Reported</th>
                  <th>Duration</th>
                  <th>Users notified</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="logBody"></tbody>
            </table>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Dashboard;
