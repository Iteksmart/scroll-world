"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type SliderSpec = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
};

const sliders: SliderSpec[] = [
  { id: "engineers", label: "IT engineers", min: 1, max: 100, step: 1, format: (v) => `${v}` },
  { id: "salary", label: "Avg salary (annual)", min: 60000, max: 300000, step: 5000, format: (v) => `$${Math.round(v / 1000)}K` },
  { id: "incidents", label: "Incidents / month", min: 5, max: 500, step: 5, format: (v) => `${v}` },
  { id: "mttr", label: "Avg MTTR (hours)", min: 0.5, max: 72, step: 0.5, format: (v) => `${v}h` },
  { id: "downtime", label: "Downtime cost / hour", min: 500, max: 100000, step: 500, format: (v) => `$${v.toLocaleString()}` },
];

const fmtMoney = (v: number) =>
  v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`;

/**
 * Savings model (mirrors the live calculator's defaults):
 * current = downtime cost + incident labor; UAIO cuts MTTR ~99.3%
 * (hours → seconds for tier-1/2) with a residual + platform baseline.
 */
export function RoiCalculator() {
  const [values, setValues] = useState<Record<string, number>>({
    engineers: 10,
    salary: 95000,
    incidents: 80,
    mttr: 4,
    downtime: 5000,
  });

  const results = useMemo(() => {
    const { engineers, salary, incidents, mttr, downtime } = values;
    const yearlyIncidents = incidents * 12;
    const downtimeCost = yearlyIncidents * mttr * downtime;
    const payroll = engineers * salary;
    const current = downtimeCost + payroll;

    // UAIO resolves ~99.3% of incident time autonomously (hours → seconds for tier-1/2).
    const uaioMttr = Math.max(mttr * 0.007, 20 / 3600);
    const withUaio = yearlyIncidents * uaioMttr * downtime + payroll;
    const annualSavings = Math.max(0, current - withUaio);
    const mttrReduction = (1 - uaioMttr / mttr) * 100;
    const hoursRecovered = Math.round(yearlyIncidents * (mttr - uaioMttr) * 0.9925);

    return { current, withUaio, annualSavings, monthlySavings: annualSavings / 12, mttrReduction, hoursRecovered };
  }, [values]);

  const tiles = [
    { label: "Annual savings", value: fmtMoney(results.annualSavings), tone: "text-proof" },
    { label: "Monthly savings", value: fmtMoney(results.monthlySavings), tone: "text-proof" },
    { label: "MTTR reduction", value: `${results.mttrReduction.toFixed(1)}%`, tone: "text-pulse" },
    { label: "Engineer hours recovered / yr", value: results.hoursRecovered.toLocaleString(), tone: "text-pulse" },
  ];

  const withPct = Math.max(4, (results.withUaio / results.current) * 100);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* Inputs */}
      <div className="space-y-7 rounded-2xl border hairline bg-card/60 p-7 sm:p-9">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Your IT environment</p>
        {sliders.map((s) => (
          <div key={s.id}>
            <div className="mb-2 flex items-baseline justify-between">
              <label htmlFor={s.id} className="text-sm text-mist">{s.label}</label>
              <span className="font-mono text-sm text-proof">{s.format(values[s.id])}</span>
            </div>
            <input
              id={s.id}
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={values[s.id]}
              onChange={(e) => setValues((v) => ({ ...v, [s.id]: Number(e.target.value) }))}
              className="w-full accent-[#3ce8a4]"
            />
          </div>
        ))}
        <p className="pt-1 font-mono text-[11px] leading-relaxed text-dim">
          Modeled estimate. For a custom analysis of your exact environment — ticketing volume, topology, compliance —
          we deliver a detailed savings report within 48 hours.
        </p>
      </div>

      {/* Results */}
      <div>
        <div className="grid grid-cols-2 gap-4">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-2xl border hairline bg-panel p-6">
              <motion.p
                key={t.value}
                initial={{ opacity: 0.4, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-display text-3xl font-medium tabular-nums tracking-tight sm:text-4xl ${t.tone}`}
              >
                {t.value}
              </motion.p>
              <p className="mt-2 text-sm text-fog">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border hairline bg-panel p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Annual cost comparison</p>
          <div className="mt-5 space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-mist">Current operations</span>
                <span className="font-mono text-alert">{fmtMoney(results.current)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-raise">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-alert/70 to-alert"
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-mist">With iTechSmart UAIO</span>
                <span className="font-mono text-proof">{fmtMoney(results.withUaio)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-raise">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-proof-dim to-proof"
                  animate={{ width: `${withPct}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
